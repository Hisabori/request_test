import json
with open('JSBridge.json', 'r') as f:
  data = json.load(f)



import pandas as pd
df = pd.DataFrame(data)
df.describe()


