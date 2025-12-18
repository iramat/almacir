# create a map of sites

import os
import pandas as pd
import folium
from branca.element import MacroElement, Template

# --- 0. Global param ----------------------------------------------------

sites = False # display or not the sites (cf. URL below)

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

# # --- 3. Center of the map -------------------------------------------------

# if not df.empty:
#     center_lat = df["lat"].astype(float).mean()
#     center_lon = df["lon"].astype(float).mean()
# else:
#     # fallback somewhere reasonable if df is empty
#     center_lat, center_lon = 40, 5

# # --- 4. Create the map ----------------------------------------------------

# # m = folium.Map(
# #     location=[center_lat, center_lon],
# #     zoom_start=6,
# #     tiles="OpenStreetMap",
# # )
# # --- 4. Create the map ----------------------------------------------------

# # Define the custom Stadia/Stamen tile layer details
# tiles_url = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}"
# attribution = 'attribution'

# m = folium.Map(
#     location=[center_lat, center_lon], # [cite: 4]
#     zoom_start=6,
#     tiles=tiles_url,
#     attr=attribution,
#     # --- Interactivity Locks ---
#     dragging=False,            # Blocks the 'span' (panning)
#     zoom_control=False,         # Removes +/- zoom buttons
#     scrollWheelZoom=False,      # Prevents zooming with mouse wheel
#     doubleClickZoom=False,      # Prevents zooming via double-click
#     touchZoom=False,            # Prevents zooming on touch devices
#     min_zoom=6,                 # Lock min zoom to the start level
#     max_zoom=6                  # Lock max zoom to the start level
# )

# --- 3. Center and Bounds -------------------------------------------------

# # Vos limites définies : y (lat), x (lon)
# min_lat, max_lat = -3, 44
# min_lon, max_lon = -11, 24

# # Calcul du centre exact de cette étendue
# center_lat = (min_lat + max_lat) / 2
# center_lon = (min_lon + max_lon) / 2
# # center_lat = 39
# # center_lon = 12

# # --- 4. Create the map ----------------------------------------------------

# tiles_url = tiles_url = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}"
# attribution = 'basemap: ESRI World_Physical_Map'

# m = folium.Map(
#     location=[center_lat, center_lon],
#     tiles=tiles_url,
#     attr=attribution,
#     # On applique les limites maximales pour empêcher de sortir de la zone
#     max_bounds=True,
#     min_lat=min_lat,
#     max_lat=max_lat,
#     min_lon=min_lon,
#     max_lon=max_lon,
#     # Paramètres de verrouillage demandés précédemment
#     dragging=False,
#     zoom_control=False,
#     scrollWheelZoom=False,
#     touchZoom=False,
#     doubleClickZoom=False,
#     min_zoom=4,                 # Lock min zoom to the start level
#     max_zoom=4,                  # Lock max zoom to the start level
#     bounceAtZoomLimits=False
# )

# Forcer la carte à s'ajuster exactement à ces limites
# m.fit_bounds([[min_lat, min_lon], [max_lat, max_lon]])

# --- 3. Center and Bounds -------------------------------------------------
# Vos limites définies : y (lat), x (lon)
min_lat, max_lat = -3, 44
min_lon, max_lon = -11, 24

# Calcul du centre exact pour un rendu équilibré dans l'iframe
# center_lat = (min_lat + max_lat) / 2 # 20.5
# center_lon = (min_lon + max_lon) / 2 # 6.5
center_lat = 39
center_lon = 12

# --- 4. Create the map ----------------------------------------------------

# URL stable pour Esri World Physical Map
tiles_url = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}"
attribution = 'Tiles &copy; Esri &mdash; Source: US National Park Service'

m = folium.Map(
    location=[center_lat, center_lon],
    # zoom_start=3,              # Zoom réduit pour éviter l'erreur "Data not available" [cite: 7]
    tiles=tiles_url,
    attr=attribution,
    max_bounds=True,           # Active les limites de la carte
    min_lat=min_lat,
    max_lat=max_lat,
    min_lon=min_lon,
    max_lon=max_lon,
    # --- Interactivity Locks (Verrouillage pour Hugo) ---
    dragging=False,            # Bloque le déplacement [cite: 6]
    zoom_control=False,        # Supprime les boutons +/-
    scrollWheelZoom=False,     # Désactive le zoom à la molette
    doubleClickZoom=False,
    touchZoom=False,
    min_zoom=5,                # Verrouille le zoom au niveau choisi [cite: 9]
    max_zoom=5,
    bounceAtZoomLimits=False
)

# Note : On ne met pas fit_bounds() car cela forcerait un zoom dynamique
# qui briserait l'affichage dans votre iframe de 900x450.

# --- 5. Add markers -------------------------------------------------------
if(sites):
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
out_name = "map.html"
out_map = f"{os.getcwd()}\\static\\{out_name}"

m

# --- 7. Save --------------------------------------------------------------

m.save(out_map)
print(f"Map saved to '{out_map}'")
