from sickle import Sickle
import pandas as pd

KEYWORD = "numismatics"

sickle = Sickle("https://zenodo.org/oai2d")

# IRAMAT community OAI-PMH set
records = sickle.ListRecords(
    metadataPrefix="oai_dc",
    set="user-iramat"
)

data = []

for record in records:
    metadata = record.metadata

    # ---- Title ----
    title = metadata.get("title", ["No Title"])[0]

    # ---- Subjects / Keywords ----
    subjects = metadata.get("subject", [])
    subjects_lower = [s.lower() for s in subjects]

    # Client-side keyword filtering
    if not any(KEYWORD in s for s in subjects_lower):
        continue

    # ---- Creators / Contributors ----
    collectors = metadata.get("creator") or metadata.get("contributor") or ["Unknown"]

    # ---- DOI / Identifiers ----
    identifiers = metadata.get("identifier", [])
    doi = next((i for i in identifiers if i.startswith("https://doi.org")), None)

    data.append({
        "Title": title,
        "Data Collector": "; ".join(collectors),
        "DOI": doi
    })

    # Safety break for testing
    if len(data) > 20:
        break

df = pd.DataFrame(data)
df = df.sort_values(by="Title", ascending=False)

print(df)

