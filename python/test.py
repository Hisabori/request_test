import json

from six import b

with open('js/test/ncmh_data/openDataSet/data/test_data_set.json', 'r') as f:
  data = json.load(f)



import pandas as pd
df = pd.DataFrame(data)
df.describe(b)


