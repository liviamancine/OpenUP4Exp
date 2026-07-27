# Tarefa: Refined Explainability Requirements (Passos)

**Descrição:**  
Definir a análise dos requisitos de explicabilidade

Observação:

- O problema de explicabilidade já foi reconhecido durante a fase de Concepção.
- A Visão da Explicabilidade foi definida e fornece o contexto estratégico para a análise.
- Os requisitos de explicabilidade foram elicitados e representam as necessidades iniciais dos stakeholders, embora ainda possam ser refinados ao longo do projeto.
- Nesta tarefa, os requisitos são analisados quanto à sua consistência, viabilidade, dependências, conflitos e prioridades, sendo posteriormente refinados e associados aos aspectos explicativos mais adequados.
- O resultado desta atividade constitui a base para a especificação detalhada dos requisitos de explicabilidade na tarefa **Especificar os Requisitos de Explicabilidade**.

[Disciplina: Requisitos](requisitos.md)

**Objetivo**

A análise de explicabilidade tem como objetivo transformar as necessidades de explicação em mecanismos explicativos adequados.

## Relacionamentos

**Papéis**  
- **Executor Principal:** [Engenheiro de Requisitos](../papeis/engenheiro-requisitos.md)  
- **Executores Adicionais:** [Arquiteto de Software](../papeis/arquiteto-software.md), [Gerente de Projetos](../papeis/gerente-projeto.md), 
[Especialista Ética](../papeis/especialista-etica-regulacao) e [Stakeholders](../papeis/stakeholders)

**Entradas**  
- **Obrigatório:**  
  - Escopo do Projeto
  - Necessidade da Explicabilidade Reconhecida
  - Elicitação dos requisitos de explicabilidade

- **Opcional:**  
  - [Lista de Item de Trabalho](#) 

- **Saídas Intermediárias:**  
  - [Glossário](#)
  - [Lista de Item de Trabalhos](#)
  - [Documento de Requisitos de Explicabilidade - DRE](../artefatos/DRE.md)
---

## Passos
***1. Consolidar e Caracterizar requisitos de explicabilidade***

**O que fazer**

Analisar cada requisito de explicabilidade identificado durante a elicitação para compreender seu contexto de uso e seus objetivos. O propósito desta atividade é obter informações suficientes para apoiar a seleção de aspectos explicativos adequados e identificar possíveis riscos, conflitos ou limitações.

Para cada requisito, validar:

- Em qual contexto a explicação será utilizada
- Qual o impacto da decisão apoiada pelo sistema
- Quais requisitos regulatórios, éticos ou organizacionais estão associados

**Quem**

- Engenheiro de Requisitos (líder), ccom apoio dos Stakeholders, Especialistas de Domínio e Especialistas em IA.

**Onde registrar**

[DRE] - ver onde registrar
Requisitos de Explicabilidade Refinados (RER) - artefato intermediário???Validar

**Boas Práticas**

- Considerar diferentes perfis de stakeholders
- Registrar o contexto de uso da explicação
- Avaliar o impacto da decisão apoiada pelo sistema
- Identificar requisitos regulatórios associados.

  *Perguntas úteis*
- Quem utilizará a explicação?
- Qual decisão está sendo apoiada?
- Qual o risco associado à decisão?
- Qual o objetivo principal da explicação?
- Existe obrigação regulatória para explicar a decisão?


***2. Classificar aspectos explicativos***

**O que fazer**

Classificar os requisitos de acordo com o aspecto explicativo predominante. Essa classificação auxilia na escolha dos aspectos explicativos mais adequados e facilita a análise posterior.

Exemplo:

| Aspectos      | Exemplos                |
| ------------- | ----------------------- |
| Compreensão   | entender resultado      |
| Justificativa | justificar decisão      |
| Confiança     | aumentar aceitação      |
| Auditoria     | verificar comportamento |
| Contestação   | questionar decisão      |
| Aprendizado   | ensinar funcionamento   |


**Quem**

- Engenheiro de Requisitos (facilitador) e Stakeholders.

**Onde registrar**

- [DRE] - ver onde registrar
- Requisitos de Explicabilidade Refinados (RER) - artefato intermediário???Validar


**Boas Práticas**

-  Permitir múltiplas classificações para um mesmo requisito quando necessário.
-  Validar a classificação junto aos stakeholders.
-  Evitar assumir que todos os usuários possuem os mesmos objetivos.

 ***3. Mapear para tipos de explicação***

**O que fazer**

Associar cada requisito de explicabilidade a um ou mais tipos de explicação que melhor atendam ao perfil do stakeholder, ao contexto da decisão e ao objetivo da explicação.
O objetivo não é selecionar uma ferramenta específica, mas identificar quais abordagens explicativas possuem maior aderência às necessidades identificadas.


| Necessidade                     | Tipo de Explicação         |
| ------------------------------- | -------------------------- |
| Justificativa clínica           | Feature Importance         |
| Explicar caso específico        | Local Explanation          |
| Explicar comportamento geral    | Global Explanation         |
| Demonstrar exemplos semelhantes | Example-based Explanation  |
| Mostrar regras                  | Rule-based Explanation     |
| Mostrar impacto dos atributos   | Counterfactual Explanation |

**Quem**

Engenheiro de Requisitos, Arquiteto de Software e Especialista em IA

**Onde registrar**

- [DRE] - ver onde registrar
- Requisitos de Explicabilidade Refinados (RER) - artefato intermediário???Validar

**Boas práticas**
- Priorizar mecanismos compatíveis com o perfil do usuário.
- Considerar limitações dos modelos de IA utilizados.
- Registrar justificativas para o mapeamento realizado.


---
***4. Analisar conflitos e divergências***

**O que fazer**

Identificar conflitos entre requisitos, stakeholders e objetivos de explicabilidade.

Exemplos:

- Usuários desejam explicações simples enquanto auditores exigem alto detalhamento.
- Requisitos de transparência entram em conflito com requisitos de privacidade.
- Explicações mais detalhadas impactam requisitos de desempenho.

Documentar os conflitos identificados e propor alternativas de resolução.

**Quem**

Engenheiro de Requisitos, Stakeholders, Especialistas de Domínio e Especialistas em IA

**Onde registrar**

- [DRE] - ver onde registrar
- Requisitos de Explicabilidade Refinados (RER) - artefato intermediário???Validar

**Boas Práticas**

- Registrar explicitamente os conflitos identificados.
- Envolver stakeholders afetados na resolução.
- Documentar justificativas para as decisões tomadas.


***5. Analisar dependências e restrições***

**O que fazer**

Avalia impacto dessas restrições nos requisitos.

Exemplo:

Requisito RE-01 - Depende de rastreabilidade - Impactado pela LGPD

**Quem**

Engenheiro de Requisitos (facilitador), Stakeholders, Gerente de Projeto, Arquiteto.

**Onde registrar**

- [Documento de Visão de Explicabilidade](../tarefas/definir-visao.md) 

**Boas Práticas**

- [VAMOS TER UM DOCUMENTO INDICANDO BOAS PRÁTICAS?](#)

***6. Avaliar viabilidade dos requisitos***

**O que fazer**

Avaliar se cada requisito de explicabilidade pode ser atendido considerando as características do sistema de Inteligência Artificial, as restrições do projeto e o contexto de utilização. A avaliação deve verificar se o requisito é tecnicamente implementável, operacionalmente aplicável e compatível com aspectos regulatórios, organizacionais e de negócio. Deve-se considerar os riscos, limitações e premissas para apoiar a priorização e a especificação dos requisitos nas etapas seguintes.
Sugestão: matriz de avaliação de viabilidade:

| Critério                        | Observação                                    | Situação|
| ------------------------------- | ----------------------------------------------|---------|
| Viabilidade técnica             | O modelo suporta explicações locasis          |Sim/Não  |
| Viabilidade regulatória         | Atende às exigências da LGPD                  |Sim/Não  |
| Viabilidade operacional         | Compatível com o fluxo de trabalho do usuário |Sim/Não  |
| Viabilidade econômica           | Custo aceitável para o projeto                |Sim/Não  |



**Quem**

Engenheiro de Requisitos (facilitador), Arquiteto de Software, Especialista em IA, Especialista de domínio,  Gerente de Projeto e Stakeholders (quando necessário).

**Onde registrar**

- [Documento de Visão de Explicabilidade](../tarefas/definir-visao.md) 

**Boas Práticas**

- Avaliar a viabilidade antes da especificação detalhada dos requisitos.
- Considerar simultaneamente aspectos técnicos, regulatórios e organizacionais.
- Registrar premissas e restrições que possam impactar a implementação.
- Identificar riscos que possam comprometer a qualidade ou a efetividade das explicações.
- Revisar a viabilidade sempre que houver mudanças significativas nos requisitos, na arquitetura ou no modelo de IA.

- [VAMOS TER UM DOCUMENTO INDICANDO BOAS PRÁTICAS?](#)

***7. Priorizar requisitos usando MoScoW***

**O que fazer**

Priorizar os requisitos de explicabilidade analisados utilizando a técnica MoSCoW, classificando-os de acordo com sua importância para o atendimento das necessidades dos stakeholders, dos objetivos do sistema e das restrições do projeto.

Cada requisito deve ser classificado em uma das seguintes categorias:

Must Have: requisito essencial para que o sistema atenda aos objetivos mínimos de explicabilidade.
Should Have: requisito importante, mas cuja ausência não inviabiliza o sistema.
Could Have: requisito desejável, cuja implementação agrega valor, mas pode ser adiada.
Won't Have (for now): requisito reconhecido, porém fora do escopo da iteração ou da versão atual.

**Quem**

Engenheiro de Requisitos (facilitador), Stakeholders, Gerente de Projeto, Arquiteto de Software

**Onde registrar**

- [Documento de Visão de Explicabilidade](../tarefas/definir-visao.md) 

**Boas Práticas**

- Priorizar requisitos após a análise de conflitos, dependências e viabilidade.
- Justificar a classificação atribuída a cada requisito.
- Revisar a priorização sempre que novos requisitos forem identificados ou houver mudanças significativas no projeto.
- Buscar equilíbrio entre necessidades dos stakeholders, riscos e capacidade de implementação.
- [VAMOS TER UM DOCUMENTO INDICANDO BOAS PRÁTICAS?](#)

***8. Obter consenso***

**O que fazer**

Conduzir uma revisão colaborativa dos requisitos de explicabilidade refinados com os stakeholders e a equipe do projeto, buscando validar os resultados da análise realizada e estabelecer um entendimento comum sobre os requisitos que seguirão para a etapa de especificação.

**Quem**

Engenheiro de Requisitos (facilitador), Stakeholders, Gerente de Projeto, Arquiteto de Software, Especialista em IA, Especialista de domínio (quando aplicável).

**Onde registrar**

- [Documento de Visão de Explicabilidade](../tarefas/definir-visao.md) 

**Boas Práticas**

- Promover revisões colaborativas envolvendo representantes dos principais stakeholders.
- Registrar justificativas para decisões, conflitos resolvidos e requisitos adiados.
- Garantir que todos os requisitos priorizados possuam consenso suficiente antes da especificação.
- Verificar a rastreabilidade entre os requisitos elicitados, os requisitos refinados e a Visão da Explicabilidade.
- [VAMOS TER UM DOCUMENTO INDICANDO BOAS PRÁTICAS?](#)

---

## Informações Adicionais

**Listas de Verificação:**  
- [Documento de Visão de Explicabilidade](../tarefas/documento-requisito.md) 

**Conceitos:**  
- [Requisitos](#)

  **Diretrizes:**  
- [Revisão eficaz de Requisitos](#)
- [Técnicas Para Obtenção de Requisitos de Explicabilidade](#)
---
**Referências:**  
- [Link para o OpenUP Original](file:///C:/Users/Livia%20Mancine/Downloads/OpenUP/Publish/openup/tasks/define_vision_9D36CF2F.html)


