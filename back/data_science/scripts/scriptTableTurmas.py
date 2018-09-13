import pandas as pd

df_matriculas = pd.DataFrame()

# importando notas de 2010 a 2017
for i in range(10,18):
    for j in range(1,3):
        print('20'+str(i)+str(j))
        df_matricula = pd.read_csv('../matriculas_new/matricula-de-20'+str(i)+str(j)+'.csv',sep=';')
        #concatena as tabelas de 2010 a 2017
        df_matriculas = pd.concat([df_matriculas, df_matricula])
        
cols = ['descricao', 'discente', 'faltas_unidade', 'id_curso',
       'id_turma', 'media_final', 'nota', 'numero_total_faltas', 'reposicao',
       'unidade']
df_matriculas = df_matriculas[cols]

# obtendo o id do curso de ciências e tecnologia
df_cursos = pd.read_csv('../cursos-graduacao.csv', sep=';')
id_cet = df_cursos[df_cursos.nome == 'CIÊNCIAS E TECNOLOGIA'].id_curso

# filtra tabela pelo id_curso
df_matriculas = df_matriculas[df_matriculas.id_curso == float(id_cet)]

# concatenar todas as turmas de 2010 a 2017
df_turmas = pd.DataFrame()
for i in range(10,18):
    for j in range(1,3):
        print(str(i)+str(j))
        f = open('../turmas_new/turmas-20'+str(i)+str(j)+'.csv')
        d = f.read()
        d = d.replace("\n","")
        x = d.split("\";\"")
        a = []
        step = 25
        for b in range(0, len(x), step):
            a.append(x[b:b+step])
        df = pd.DataFrame(a[1:],columns=['id_turma']+a[0][1:])
        df_turmas = pd.concat([df_turmas, df])

# conversoes
df_turmas['id_turma'] = df_turmas.id_turma.astype(int)
df_turmas['id_componente_curricular'] = df_turmas.id_componente_curricular.astype(int)
df_turmas['ano'] = df_turmas.ano.astype(int)
df_turmas['periodo'] = df_turmas.periodo.astype(int)

# nova coluna
series_anoperiodo = (df_turmas['ano'].map(str)+df_turmas['periodo'].map(str))
df_turmas['periodoano'] = series_anoperiodo.astype(int)

# filtrando por ano e nivel de ensino
df_turmasFilt = df_turmas[(df_turmas['ano'] >= 2015) & 
                          (df_turmas['nivel_ensino'] == 'GRADUAÇÃO')]

df_componentes = pd.read_csv('../componentes-curriculares-presenciais-ok.csv')

df_turmasNome = pd.merge(df_turmasFilt, df_componentes, left_on='id_componente_curricular', right_on='id_componente')

colunas = ['id_turma', 'codigo', 'nome', 'pre_requisito', 'ano', 'periodo', 'unidade_responsavel', 'periodoano']
df_turmasNome = df_turmasNome[colunas]

df_auxAll = pd.merge(df_matriculas, df_turmasNome, on='id_turma')
df_auxAll = df_auxAll.drop_duplicates().dropna()

# conjunto de alunos que não serão analisados
series_Antes2015 = df_auxAll[df_auxAll['ano']<2015].discente

# selecionando apenas alunos que entraram a partir de 2015
df_depois2015 = df_auxAll[~df_auxAll['discente'].isin(series_Antes2015)]
df_depois2015 = df_depois2015[df_depois2015['unidade_responsavel'] == 'ESCOLA DE CIÊNCIAS E TECNOLOGIA']

disciplinas = ['CÁLCULO I','CÁLCULO II','CÁLCULO III','VETORES E GEOMETRIA ANALÍTICA','PRÉ-CÁLCULO','PROBABILIDADE E ESTATÍSTICA',
               'INTRODUÇÃO À FÍSICA CLÁSSICA I','INTRODUÇÃO À FÍSICA CLÁSSICA II','INTRODUÇÃO À FÍSICA CLÁSSICA III','LÓGICA DE PROGRAMAÇÃO',
               'LINGUAGEM DE PROGRAMAÇÃO','COMPUTAÇÃO NUMÉRICA','QUÍMICA GERAL','ÁLGEBRA LINEAR','MECÂNICA DOS SÓLIDOS','MECÂNICA DOS FLUIDOS',
               'CIÊNCIA E TECNOLOGIA DOS MATERIAIS']

df_auxTurmas = df_depois2015[df_depois2015['nome'].isin(disciplinas)]

colunas_3 = ['descricao', 'discente', 'id_turma', 'media_final', 'codigo',
       'nome', 'ano', 'periodo', 'unidade_responsavel', 'id_curso','periodoano']
df_auxTurmas = df_auxTurmas[colunas_3]
df_auxTurmas.to_csv("../turmas_2015-2017.csv")
