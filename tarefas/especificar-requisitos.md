# Tarefa: Especificar os Requisitos de Explicabilidade (Passos)

**Descrição:** 

Esta tarefa tem como objetivo especificar os requisitos de explicabilidade previamente analisados, documentando-os de forma estruturada, rastreável e verificável por meio de Histórias de Usuário (HU), critérios de aceitação (**confirmar**) - orientação para o desenvolvimento e validação???

Observação:
- A Visão da Explicabilidade encontra-se consolidada e estabelece o direcionamento estratégico da explicabilidade no projeto.
- Os requisitos de explicabilidade foram elicitados e posteriormente analisados quanto à sua consistência, conflitos, dependências, viabilidade e prioridade.
- Nesta tarefa, os requisitos refinados são especificados em um nível suficiente para apoiar o desenvolvimento, a validação e a rastreabilidade da solução (**confirmar**).
- A especificação utiliza Histórias de Usuário como principal técnica para representar os requisitos de explicabilidade complementadas por critérios de aceitação.
- O resultado desta atividade é o Documento de Requisitos de Explicabilidade (DRE).

[Disciplina: Requisitos](../disciplina/requisitos.md)

**Objetivo**

Especificar os requisitos de explicabilidade previamente analisados, transformando-os em requisitos claros, completos, consistentes, rastreáveis e verificáveis, de forma a orientar a implementação e a validação dos mecanismos de explicação do sistema.

## Relacionamentos

**Papéis**  
- **Executor Principal:** [Engenheiro de Requisitos](../papeis/engenheiro-requisitos.md)  
- **Executores Adicionais:** [Arquiteto de Software](../papeis/arquiteto-software.md), [Desenvolvedor](../papeis/desenvolvedor.md), [Especialista de Domínio](../papeis/especialista-dominio.md), [Stakeholders](../papeis/stakeholders.md)[Testador](../papeis/testador.md), [Especialista Regulação](../papeis/especialista-etica-regulacao.md), [Especialista em IA](../papeis/especialista-IA.md)

**Entradas**  
- **Obrigatório:**  
  - [Visão da Explicabilidade](../artefatos/visao-explicabilidade.md)
  - []
- **Opcional:**  
  - Nenhum
- **Saídas:**  
    - [Especificação da Explicabilidade](../artefatos/DRE.md)
---
## Passos

***1. Especificar requisitos utilizando Histórias de Usuário***

**O que fazer**

Especificar cada requisito de explicabilidade utilizando HU, descrevendo de forma clara quem necessita da explicação, qual necessidade deve ser atendida e qual benefício é esperado.

As HU devem representar o comportamento esperado do sistema sob a perspectiva do stakeholder, permitindo que a equipe compreenda o valor da explicação e sua contribuição para o processo decisório.

Sempre que necessário, complementar a HU com informações que caracterizem o requisito de explicabilidade, como objetivo da explicação, contexto de uso, perfil do stakeholder e prioridade (CONFIRMAR).

As histórias de usuário servirão como principal mecanismo de comunicação entre stakeholders, equipe de desenvolvimento e demais participantes do projeto, apoiando a implementação e a validação dos mecanismos de explicação.

**Quem**

Engenheiro de Requisitos, Stakeholders, Especialista de domínio e Especialista em IA (quando aplicável)

**Onde registrar**

[DRE](../artefatos/DRE.md)

**Boas Práticas**

- Escrever histórias utilizando linguagem simples, clara e orientada ao valor para o stakeholder.
- Utilizar um padrão consistente para todas as histórias de usuário.
- Especificar apenas uma necessidade principal por história.
- Evitar incluir detalhes de implementação ou da técnica de explicabilidade.
- Garantir rastreabilidade entre a história de usuário e o requisito refinado correspondente.
- Validar as histórias junto aos stakeholders antes da definição dos critérios de aceitação.
- Formato recomendado:
  Como <stakeholder>

  Quero <necessidade de explicabilidade>

  Para <benefício esperado>.

## Passos

***2. Definir critérios de aceitação***

**O que fazer**

Definir critérios de aceitação para cada História de Usuário de Explicabilidade, estabelecendo condições objetivas que permitam verificar se o requisito foi implementado corretamente e atende às necessidades dos stakeholders.

Os critérios de aceitação devem descrever o comportamento esperado do sistema, bem como as condições sob as quais a explicação deverá ser apresentada. 

Os critérios devem ser mensuráveis, verificáveis e consistentes com os objetivos da explicabilidade identificados durante a análise.

**Quem**

Engenheiro de Requisitos, Stakeholders, Especialista de domínio e equipe de desenvolvimento (quando necessário)

**Onde registrar**

[DRE](../artefatos/DRE.md)

**Boas Práticas**
- Especificar critérios claros, objetivos e verificáveis.
- Definir critérios independentes da tecnologia utilizada.
- Garantir alinhamento entre os critérios de aceitação e os objetivos da explicabilidade.
- Evitar critérios vagos, subjetivos ou de difícil validação.
- Validar os critérios juntamente com os stakeholders.
- Formato recomendado para facilitar a validação do requisito: Dado–Quando–Então (Given–When–Then) 
---
## Passos

***3. Especificar características da explicação***

**O que fazer**

Especificar as características esperadas para cada explicação associada às HU, descrevendo os elementos necessários para que a equipe de desenvolvimento compreenda o comportamento esperado da explicação. O objetivo é complementar as HU sem definir mecanismos específicos de implementação.

As características podem incluir, entre outras:
- objetivo da explicação;
- público-alvo;
- contexto de utilização;
- nível de detalhamento esperado;
- formato de apresentação (textual, visual, tabular ou combinado);
- momento em que a explicação deve ser disponibilizada;
- requisitos de qualidade associados.

**Quem**

Engenheiro de Requisitos, Especialista de domínio, Especialista em IA e Stakeholders

**Onde registrar**

[DRE](../artefatos/DRE.md)

**Boas Práticas**
- Descrever as características sob a perspectiva do stakeholder.
- Evitar especificar algoritmos ou técnicas de explicabilidade.
- Garantir consistência com os requisitos refinados.
- Utilizar linguagem clara e objetiva.
- Registrar somente informações relevantes para a implementação e validação.

---

## Passos

***4. Estabelecer rastreabilidade***

**O que fazer**

Estabelecer a rastreabilidade entre os requisitos especificados e os artefatos produzidos nas etapas anteriores da Engenharia de Requisitos.

Cada requisito especificado deve estar relacionado, sempre que aplicável, aos seguintes elementos:
- requisito refinado correspondente;
- HU;
- stakeholder;
- necessidade de explicabilidade;
- critérios de aceitação;
- prioridade.

A rastreabilidade permite acompanhar a evolução dos requisitos ao longo do projeto, facilitando análises de impacto, manutenção e validação.

**Quem**

Engenheiro de Requisitos.

**Onde registrar**

[DRE](../artefatos/DRE.md)

**Boas Práticas**
- Manter identificadores únicos para cada requisito.
- Garantir rastreabilidade bidirecional.
- Atualizar os relacionamentos sempre que houver alterações.
- Evitar registros duplicados.
- Utilizar convenções consistentes de identificação.
---

## Passos

***5. Consolidar o Documento de Requisitos de Explicabilidade (DRE)***

**O que fazer**

Organizar e consolidar todas as Histórias de Usuário, critérios de aceitação, características das explicações e informações complementares em um único Documento de Requisitos de Explicabilidade (DRE).

Antes da consolidação, verificar a consistência, completude e rastreabilidade dos requisitos especificados, assegurando que todas as informações necessárias para apoiar o desenvolvimento e a validação estejam devidamente registradas.

**Quem**

Engenheiro de Requisitos

**Onde registrar**

[DRE](../artefatos/DRE.md)

**Boas Práticas**
- Verificar a consistência entre os requisitos especificados.
- Garantir que todos os requisitos possuam critérios de aceitação.
- Confirmar a rastreabilidade com os artefatos produzidos anteriormente.
- Padronizar a estrutura e a terminologia utilizadas no documento.
- Controlar versões e histórico de alterações.
---

## Passos

***6. Obter consenso***

**O que fazer**
Realizar uma revisão colaborativa do DRE com os stakeholders e a equipe do projeto para validar a especificação dos requisitos antes do início da implementação.

A revisão deve confirmar que as HU, os critérios de aceitação e as características das explicações representam corretamente as necessidades identificadas durante as etapas de elicitação e análise.

As decisões tomadas durante a revisão devem ser registradas, bem como eventuais ajustes necessários para a aprovação do documento.

**Quem**

Engenheiro de Requisitos, Gerente de Projeto, Arquiteto de software, Especialista de domínio, Especialista em IA e Stakeholders

**Onde registrar**

[DRE](../artefatos/DRE.md)

**Boas Práticas**
- Promover revisões colaborativas com representantes dos principais stakeholders.
- Registrar decisões, pendências e justificativas.
- Resolver inconsistências antes do início da implementação.
- Garantir alinhamento entre requisitos, critérios de aceitação e objetivos da explicabilidade.
- Formalizar a aprovação do DRE quando aplicável.
- 

---
