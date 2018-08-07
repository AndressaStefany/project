curl http://dados.ufrn.br/dataset/82aca3f1-f7ee-425e-bf1e-b6a1d6811bf4/resource/3f25d054-c5d2-4bf2-8cd4-8e0a2e4f63ce/download/curriculo-componente-graduacao > ../curriculo-componente-graduacao.csv
curl http://dados.ufrn.br/dataset/3fea67e8-6916-4ed0-aaa6-9a8ca06a9bdc/resource/9a3521d2-4bc5-4fda-93f0-f701c8a20727/download/componentes-curriculares-presenciais.csv > ../componentes-curriculares-presenciais.csv
python3 scriptTableComponentes.py
python3 scriptComponentes.py
