# create a map of sites

import os
import pandas as pd
import folium
from branca.element import MacroElement, Template

# --- 1. Load data ---------------------------------------------------------

URL = "https://raw.githubusercontent.com/iramat/almacir/refs/heads/hugo-files/static/sites.tsv"
# URL = "./static/sites.tsv"

# If you download it locally, replace URL by "data/sites.tsv"
df = pd.read_csv(URL, sep=r"\s+", engine="python")

# Ensure we have the expected columns
required_cols = {"name_fr", "name_en", "lat", "lon", "type"}
missing = required_cols - set(df.columns)
if missing:
    raise ValueError(f"Missing columns in TSV: {missing}")

# Drop rows with missing coordinates
df = df.dropna(subset=["lat", "lon"])

# --- 2. Define category styles -------------------------------------------

# Map the 'type' codes to colors/icons/labels for the legend.
# Adjust this dictionary to match your real categories.
TYPE_STYLES = {
    "A": {  # atelier / workshop
        "color": "red",
        "icon": "glyphicon-wrench",
        "label": "Workshop (A)",
    },
    "S": {  # just an example: Settlement
        "color": "blue",
        "icon": "glyphicon-home",
        "label": "Settlement (S)",
    },
    "M": {  # example: Mine
        "color": "green",
        "icon": "glyphicon-cog",
        "label": "Mine (M)",
    },
}

DEFAULT_STYLE = {
    "color": "gray",
    "icon": "glyphicon-map-marker",
    "label": "Other",
}

# Collect all types present (for the legend)
types_in_data = sorted(df["type"].dropna().unique().tolist())

# --- 3. Center of the map -------------------------------------------------

if not df.empty:
    center_lat = df["lat"].astype(float).mean()
    center_lon = df["lon"].astype(float).mean()
else:
    # fallback somewhere reasonable if df is empty
    center_lat, center_lon = 40, 5

# --- 4. Create the map ----------------------------------------------------

m = folium.Map(
    location=[center_lat, center_lon],
    zoom_start=6,
    tiles="OpenStreetMap",
)

# --- 5. Add markers -------------------------------------------------------

for _, row in df.iterrows():
    lat = float(row["lat"])
    lon = float(row["lon"])

    site_type = str(row["type"])
    style = TYPE_STYLES.get(site_type, DEFAULT_STYLE)

    name = row.get("name_fr") or row.get("name_en") or "Unnamed site"
    desc_fr = row.get("description_fr", "")
    desc_en = row.get("description_en", "")

    popup_html = f"""
    <strong>{name}</strong><br>
    <b>Type:</b> {site_type}<br>
    <b>Description (FR):</b> {desc_fr}<br>
    <b>Description (EN):</b> {desc_en}
    """

    folium.Marker(
        location=[lat, lon],
        popup=folium.Popup(popup_html, max_width=300),
        tooltip=name,
        icon=folium.Icon(
            color=style["color"],
            icon=style["icon"].split("-")[-1],  # e.g. "wrench" from "glyphicon-wrench"
            prefix="glyphicon",
        ),
    ).add_to(m)

# --- 6. Add legend --------------------------------------------------------

legend_items = []
for t in types_in_data:
    style = TYPE_STYLES.get(t, DEFAULT_STYLE)
    label = style["label"]
    color = style["color"]
    legend_items.append((t, color, label))

legend_html = """
{% macro html(this, kwargs) %}
<div id="map-legend" style="
    position: fixed;
    bottom: 30px;
    left: 30px;
    z-index: 9999;
    background: white;
    padding: 10px 15px;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,0.15);
    font-size: 14px;
    ">
  <div style="font-weight:bold; margin-bottom:5px;">Site categories</div>
  {% for t, color, label in legend_items %}
    <div style="margin-bottom:2px;">
      <span style="
        display:inline-block;
        width:12px;
        height:12px;
        margin-right:6px;
        border-radius:50%;
        background: {{ color }};
      "></span>
      {{ label }}
    </div>
  {% endfor %}
</div>
{% endmacro %}
"""

legend = MacroElement()
legend._template = Template(legend_html)

# → Inject legend_items into the template context
legend._template.module.legend_items = legend_items

m.get_root().add_child(legend)
out_map = f"{os.getcwd()}\\static\\map.html"

m

# --- 7. Save --------------------------------------------------------------

# m.save(out_map)
print("Map saved to map.html")
