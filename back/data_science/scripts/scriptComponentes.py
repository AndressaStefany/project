import pandas as pd

df_curriculo = pd.read_csv('../curriculo-componente-graduacao.csv', sep=';')
colunas_2 = ['id_componente_curricular', 'semestre_oferta']
df_curriculo = df_curriculo[colunas_2]

df_materias = pd.read_csv('../componentes-curriculares-presenciais-ok.csv')

df_materiasSemestre = pd.merge(df_materias, df_curriculo, left_on='id_componente', right_on='id_componente_curricular').drop_duplicates()

unidade = 'ESCOLA DE CIÊNCIAS E TECNOLOGIA'

df_materiasSemestre = df_materiasSemestre[(df_materiasSemestre['unidade_responsavel'] == unidade) & 
                                          (df_materiasSemestre['ano_programa'] >= 2014) & 
                                          (df_materiasSemestre['semestre_oferta']>0) & 
                                          (df_materiasSemestre['semestre_oferta']<=4)]

colunas = ['id_componente','codigo','nome','ch_teorico', 'ch_pratico', 'ch_estagio',
       'ch_total', 'ch_dedicada_docente', 'ch_ead', 'cr_max_ead',
       'qtd_unidades', 'equivalencia', 'pre_requisito', 'competencias_habilidades',
       'ano_programa', 'periodo_programa', 'semestre_oferta']

df_materiasSemestre = df_materiasSemestre[colunas]

df_materiasSemestre.to_csv('componentes-semestres.csv')
