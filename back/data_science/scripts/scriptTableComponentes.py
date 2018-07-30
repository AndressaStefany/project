import pandas as pd

f = open("../componentes-curriculares-presenciais.csv")
d = f.read()
d = d.replace("\n","")
x = d.split("\";\"")
a = []
step = 29
for i in range(0, len(x), step):
    a.append(x[i:i+step])
df = pd.DataFrame(a[1:],columns=['id_componente']+a[0][1:])

df['id_componente'] = df.id_componente.astype(int)
df['ch_teorico'] = df.ch_teorico.astype(int)
df['ch_pratico'] = df.ch_pratico.astype(int)
df['ch_estagio'] = df.ch_estagio.astype(int)
df['ch_total'] = df.ch_total.astype(int)
df['ch_dedicada_docente'] = df.ch_dedicada_docente.astype(int)
df['ch_ead'] = df.ch_ead.astype(int)

df.to_csv('../componentes-curriculares-presenciais-ok.csv')
