curl http://dados.ufrn.br/dataset/82aca3f1-f7ee-425e-bf1e-b6a1d6811bf4/resource/3f25d054-c5d2-4bf2-8cd4-8e0a2e4f63ce/download/curriculo-componente-graduacao > ../curriculo-componente-graduacao.csv
curl http://dados.ufrn.br/dataset/3fea67e8-6916-4ed0-aaa6-9a8ca06a9bdc/resource/9a3521d2-4bc5-4fda-93f0-f701c8a20727/download/componentes-curriculares-presenciais.csv > ../componentes-curriculares-presenciais.csv
curl http://dados.ufrn.br/dataset/e7c24910-75c1-451b-9097-e4352488dd69/resource/94cc35b0-6560-44f3-8c67-98cff965f23c/download/estruturas-curriculares.csv > ../estruturas-curriculares.csv
curl http://dados.ufrn.br/dataset/02526b96-cf40-4507-90b0-3afe5ddd53e7/resource/a10bc434-9a2d-491a-ae8c-41cf643c35bc/download/cursos-de-graduacao.csv > ../cursos-graduacao.csv

mkdir ../matriculas_new
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/55dfe713-ff7c-4fa8-8d1d-d4294a025bff/download/matricula-componente-20172 > ../matriculas_new/matricula-de-20172.csv
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/79071c21-e32c-438f-b930-d1b6ccc02ec2/download/matricula-componente-20171 > ../matriculas_new/matricula-de-20171.csv
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/f6179838-b619-4d7d-af9c-18c438b80dd4/download/matriculas-de-2016.2.csv > ../matriculas_new/matricula-de-20162.csv
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/4778d3ce-8898-46a8-a623-ee6a480a2980/download/matriculas-de-2016.1.csv > ../matriculas_new/matricula-de-20161.csv
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/baa6c8b4-2072-417f-b238-c028ccc8c14b/download/matriculas-de-2015.2.csv > ../matriculas_new/matricula-de-20152.csv
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/9e7ba1c2-f92d-4b9c-9e91-3b026ecdf913/download/matriculas-de-2015.1.csv > ../matriculas_new/matricula-de-20151.csv
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/e974792c-b557-470c-bf3d-ede7d5b5e6a6/download/matricula-componente-20142.csv > ../matriculas_new/matricula-de-20141.csv
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/7081446d-39f9-4374-ad0b-86ecab97e569/download/matricula-componente-20141.csv > ../matriculas_new/matricula-de-20141.csv
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/517ed5f6-f8a2-40fd-826b-6ed3388f6e88/download/matricula-componente-20132.csv > ../matriculas_new/matricula-de-20132.csv
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/674de4cc-1fc0-4314-9f04-a38f0e1f9225/download/matricula-componente-20131.csv > ../matriculas_new/matricula-de-20131.csv
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/f2487ebc-e1d7-4fef-ac5d-542636448207/download/matricula-componente-20122.csv > ../matriculas_new/matricula-de-20122.csv
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/28d90237-a056-4768-b790-64d7ff6308c2/download/matricula-componente-20121.csv > ../matriculas_new/matricula-de-20112.csv
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/919193f3-c3a9-46e5-a186-30486f228385/download/matricula-componente-20111.csv > ../matriculas_new/matricula-de-20111.csv
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/34857034-d117-491b-aace-4d389df76051/download/matricula-componente-20102.csv > ../matriculas_new/matricula-de-20102.csv
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/d44017d7-8390-45c1-8073-82c0d1f57847/download/matricula-componente-20101.csv > ../matriculas_new/matricula-de-20101.csv
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/d44017d7-8390-45c1-8073-82c0d1f57847/download/matricula-componente-20101.csv > ../matriculas_new/matricula-de-20092.csv
curl http://dados.ufrn.br/dataset/c8650d55-3c5a-4787-a126-d28a4ef902a6/resource/bd578e3c-9fd0-4fc3-af12-07d36990325a/download/matricula-componente-20091.csv > ../matriculas_new/matricula-de-20091.csv

mkdir ../turmas_new
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/01fe7343-fdf0-4a67-b915-2386b7c2fecb/download/turmas-2017.2.csv > ../turmas_new/turmas-20172.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/5e77d066-d506-45eb-a21e-76aa79616fef/download/turmas-2017.1 > ../turmas_new/turmas-20171.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/5e8e3228-7f22-40a2-9efd-561c44844567/download/turmas-2016.2.csv > ../turmas_new/turmas-20162.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/322d9977-ba15-47f1-8216-75a1ca78e197/download/turmas-2016.1.csv > ../turmas_new/turmas-20161.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/7c59621c-4a8b-49d4-b319-83cfea9bdf28/download/turmas-2015.2.csv > ../turmas_new/turmas-20152.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/4d5aee5a-00b0-4ed6-a4be-59fa77a56797/download/turmas-2015.1.csv > ../turmas_new/turmas-20151.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/2c69547b-920f-4ec2-92c0-3fbc19512165/download/turmas-2014.2.csv > ../turmas_new/turmas-20142.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/e6e4144f-4042-4fdc-84e0-76e9ec27ae7c/download/turmas-2014.1.csv > ../turmas_new/turmas-20141.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/e7e3cf12-a29b-491a-a895-021a43819197/download/turmas-2013.2.csv > ../turmas_new/turmas-20132.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/0d96d930-8058-4def-9044-c3ae04c1f40c/download/turmas-2013.1.csv > ../turmas_new/turmas-20131.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/e76d93c8-750d-4c36-b314-21ea4c02f250/download/turmas-2012.2.csv > ../turmas_new/turmas-20122.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/03e25f59-ed58-4a46-b68f-a273c89425de/download/turmas-2012.1.csv > ../turmas_new/turmas-20121.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/dae1b983-ba03-4a6b-9aa0-eac011336b57/download/turmas-2011.2.csv > ../turmas_new/turmas-20112.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/94ba8837-ba77-4ca1-8746-73192c77365a/download/turmas-2011.1.csv > ../turmas_new/turmas-20111.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/6c604180-ebf4-4cc2-b253-0fe0867ab1db/download/turmas-2010.2.csv > ../turmas_new/turmas-20102.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/598758c3-0725-48cc-ab8a-d0c25feee0ae/download/turmas-2010.1.csv > ../turmas_new/turmas-20101.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/cca378a2-1d15-47be-a133-ca8839687278/download/turmas-20092.csv > ../turmas_new/turmas-20092.csv
curl http://dados.ufrn.br/dataset/1938623d-fb07-41a4-a55a-1691f7c3b8b5/resource/d4cf2073-37c3-430a-81bc-cb19f4a1b6a6/download/turmas-20091.csv > ../turmas_new/turmas-20091.csv

mkdir ../discentes
curl http://dados.ufrn.br/dataset/554c2d41-cfce-4278-93c6-eb9aa49c5d16/resource/146b749b-b9d0-49b2-b114-ac6cc82a4051/download/discentes-2018.csv > ../discentes/discentes-2018.csv
curl http://dados.ufrn.br/dataset/554c2d41-cfce-4278-93c6-eb9aa49c5d16/resource/dc732572-a51a-4d4a-a39d-2db37cbe5382/download/discentes-2017.csv > ../discentes/discentes-2017.csv
curl http://dados.ufrn.br/dataset/554c2d41-cfce-4278-93c6-eb9aa49c5d16/resource/7d2fa5b3-743f-465f-8450-91719b34a002/download/discentes-2016.csv > ../discentes/discentes-2016.csv
curl http://dados.ufrn.br/dataset/554c2d41-cfce-4278-93c6-eb9aa49c5d16/resource/e2b5b843-4f58-497e-8979-44daf8df8f94/download/discentes-2015.csv > ../discentes/discentes-2015.csv
curl http://dados.ufrn.br/dataset/554c2d41-cfce-4278-93c6-eb9aa49c5d16/resource/6c23a430-9a7c-4d0f-9602-1d5d97d40e6a/download/discentes-2014.csv > ../discentes/discentes-2014.csv
curl http://dados.ufrn.br/dataset/554c2d41-cfce-4278-93c6-eb9aa49c5d16/resource/dba208c2-822f-4e26-adc3-b61d4cb110b6/download/discentes-2013.csv > ../discentes/discentes-2013.csv
curl http://dados.ufrn.br/dataset/554c2d41-cfce-4278-93c6-eb9aa49c5d16/resource/fc283aa9-61a7-4cf0-91fb-c403c0817b48/download/discentes-2012.csv > ../discentes/discentes-2012.csv
curl http://dados.ufrn.br/dataset/554c2d41-cfce-4278-93c6-eb9aa49c5d16/resource/2bb3dec9-7f23-434c-a179-21515f91abc8/download/discentes-2011.csv > ../discentes/discentes-2011.csv
curl http://dados.ufrn.br/dataset/554c2d41-cfce-4278-93c6-eb9aa49c5d16/resource/5fc61f78-19b4-4020-9f3c-c298cb8a63aa/download/discentes-2010.csv > ../discentes/discentes-2010.csv
curl http://dados.ufrn.br/dataset/554c2d41-cfce-4278-93c6-eb9aa49c5d16/resource/861b96a8-5304-4e6a-a8c4-068533ec7cb9/download/discentes-2009.csv > ../discentes/discentes-2009.csv

python3 scriptTableComponentes.py
python3 scriptComponentes.py
python3 scriptTableDiscPrerequisitos.py
python3 scriptTableTurmas.py
