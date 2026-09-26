# Fable Sleight — first release design

**Status:** product and research target, 25 September 2026. This document specifies what we intend to build. It is not a claim that Fable has shipped or that the complete loop already works.

Fable is downloadable software that builds a personal AI from the material its owner chooses. The entity is a connected system of locally held personal models, evidence, memory, an experience ledger, and a conversation architecture. Fable is the builder and the resulting entity, not a single downloadable general-purpose model.

The first release is designed to give the owner a personal foundation built for them. For general feature capability, including fluent language generation, it can call GPT or Claude APIs through a controlled interface. Those providers do not become Fable's identity or the authority that decides how it behaves.

## What the installation builds and ships

The desktop package supplies the Fable Builder Model (FBM), local training and evaluation machinery, memory and evidence infrastructure, and the conversation architecture. It builds or forms five starting personal capabilities for the host:

| Capability | Responsibility |
| --- | --- |
| Personality and identity model | Evidence-grounded character, values, judgment, behavioral tendencies, and expression. |
| Memory Formation Model (MFM) | Propose interpretations of new experiences; memory authority remains in the governed memory architecture. |
| Host model | Learn the owner's goals, history, preferences, conflicts, and changes over time. |
| Relationship model | Learn the shared history and interaction norms between the owner and their Fable. |
| Fable self model | Track the entity's own post-activation decisions, lessons, and continuity, separate from the host's history. |

These are capability roles, not a promise that every installation contains exactly five neural weight files. The Experience Ledger, evidence and claim stores, memory gate, retrieval and context assembly, provenance, correction, deletion, and rollback mechanisms ship as infrastructure. Additional non-feature learned components may be needed; the total model count is not fixed.

FBM must distinguish direct evidence, supported inference, historical unknowns, synthetic behavioral teaching material, and lived experience. Synthetic material cannot turn into a fabricated life history. With little personal material, a user may start with uncertainty; Fable must not claim to know what the evidence cannot establish. The product goal is for this whole personal foundation to work together at consumer scale, rather than offer a small isolated memory demo.

### Outside data used during a personal build

Building a model from a fresh personal training run does not mean training on personal files alone. A semantic foundation such as A.L.I.C.E.'s N0 needs identity-neutral public, licensed, or other authorized material to learn language, social meaning, and evidence interpretation before it can learn from one person's history. Synthetic training examples may also be used, with provenance and a clear separation from personal evidence.

The installer should let the owner inspect and choose eligible outside source packs, add their own permitted sources, and see what each source is used for. The builder must check licensing, provenance, suitability, contamination, hardware cost, and adequacy before training. Omitting a necessary source can lower competence or prevent a qualified build; the interface must say so. Reusable software, curricula, and optional general source packs do not grant anyone else ownership over the resulting user's evidence or newly trained personal weights. We will document exactly which weights were initialized and trained for a user rather than call a fine-tuned third-party checkpoint “from scratch.”

## Conversation: a first-party decision with external language assistance

Conversation is a special feature capability in the first release. A locally controlled Fable conversation system receives the user's turn, assembles relevant personal context, and obtains a native verdict from the personal foundation **before** asking an API for language. No one of the five starting personal capabilities alone serves as a general chat generator. A.L.I.C.E.'s existing Phase 3 local Qwen adapter is a research runtime, not this destination architecture.

The verdict is an actionable response contract, not just an answer label. Depending on the situation, it specifies:

- Fable's stance and whether to agree, disagree, ask, act, or abstain;
- evidence, reasons, uncertainty, and which past experiences matter;
- whose perspective is being represented and what must not be claimed;
- relationship-specific voice, register, directness, warmth, and expression;
- the points to include, the boundaries not to cross, and the expected form of the reply.

A first-release turn should follow this path:

1. **Decide locally.** Memory, host, identity, relationship, and self capabilities work with context assembly and the Experience Ledger. Native judgment produces a versioned identity decision packet and its expression requirements.
2. **Prepare a bounded API request.** The local encoder and egress gateway translate only the task and minimum permitted context into an API request. It may use temporary placeholders and local mappings. It never sends the whole vault or unfiltered personal-state packet as a conversation prompt. The aim is to give the language engine enough direction to produce the right response on the first attempt.
3. **Generate a candidate.** GPT or Claude proposes language or other feature work. It is a replaceable supplier of capability. Its draft has no authority to overrule Fable's verdict.
4. **Check and decode locally.** The conversation system uses the existing personal capabilities, their evidence, and the verdict to compare the candidate's stance, reasoning, factual bounds, relationship behavior, and *way of speaking* with what Fable intended. A conclusion match alone is insufficient. The decoder restores permitted private references locally and checks the completed reply.
5. **Correct only when necessary.** If a draft misses a specific requirement, request a focused revision within a short retry and latency budget. If it still fails, use an appropriate local response or disclose the limitation. An open-ended API retry loop is not an acceptable normal path.
6. **Learn from the outcome.** Record the decision, selected response, correction and later outcome with provenance. Governed updates to host, relationship, and self state must be able to change a later relevant verdict without silently rewriting the source identity.

This comparison is a function of Fable's conversation architecture and existing personal foundation. It is **not a separate sixth memory model or an external model appointed to judge Fable**. We still need to design and train the first-party conversation capability that manages the live interaction, communicates with feature engines, and applies this response contract. It must not reduce to forwarding a personality prompt to a general chatbot. The model topology, exact comparison mechanism, and runtime budgets remain engineering decisions to validate during the A.L.I.C.E. build.

**First-pass behavior matters.** Most acceptable turns should succeed on the first API response. Qualification must measure first-pass acceptance, the reasons for correction, end-to-end and tail latency, cost, and user-perceived voice across providers and personal-state changes. We have not yet established numeric release thresholds; these must be fixed before claiming the capability works.

### The privacy boundary

An encoder and decoder can remove identifiers, reduce context, keep a private mapping locally, and prevent unauthorized raw records from crossing the boundary. They cannot make a standard text API reason over information it never receives. An abstract situation can still disclose something about the user, especially when repeated calls are combined. Encryption or placeholders must not be described as a guarantee of zero disclosure.

Every outbound request must be governed by source permissions, data class, destination, purpose, and a visible user-controlled egress policy. If the useful task cannot be expressed without disclosing sensitive personal meaning, Fable should use a local limited path or obtain the user's specific authorization for that disclosure. Offline operation prevents API calls; it does not magically provide the same first-release general language or feature capability. Provider data handling and retention controls do not make remote processing local.

## Feature capabilities and later stages

Coding, simulation, research, vision, image editing, and other general feature tasks use external GPT/Claude services in the first-release plan when the host allows those calls. They pass through the same egress boundary. Fable's personal foundation decides how a result serves the host; it cannot conceal a private codebase from a remote coding engine while asking that engine to operate on its exact contents.

Later stages are (1) first-party frontier feature models that can replace external feature calls where they qualify and (2) FBM or successor infrastructure that can build more feature specialists for an individual. Neither stage is a first-release capability or a promise that consumer hardware can train a frontier generator from a small personal corpus.

## Builder data and seed program

The first-release promise depends on a reusable host-neutral FBM that can build and test the *whole* connected personal foundation. Its initial software, model competence, outside source packs, synthetic fictional cases, and training recipes need explicit lineage and rights. The owner supplies authorized personal evidence, not hand-labeled gold tasks or a required ideal-self questionnaire. Sparse evidence leaves some capabilities uncertain or unqualified; it does not license invented history. Relationship and Fable-self experience can develop only after real interactions.

A.L.I.C.E.'s compact build traces are seeds for builder operations, but they are not by themselves a multi-user training and evaluation corpus. The [FBM data and seed program](https://github.com/NIne-WIngEd/A.L.I.C.E/blob/fable-builder-model/docs/fable-builder/FBM_DATA_AND_SEED_PROGRAM_2026-09-26.md) defines the source classes, independent holdouts, subject/provenance separation, assembled-instance tests, and no-deployment-teacher requirement. These are build and qualification targets, not implemented release features.

## What qualifies the first release

This release is blocked until tests and real usage establish all of the following:

- a complete source-to-personal-model build with provenance, inspection, correction, deletion, rollback, and portability;
- a working experience-to-state-to-native-verdict-to-response-to-outcome loop, including relevant behavioral change after new evidence;
- distinct users or controlled state interventions produce appropriately distinct verdicts and expression; switching GPT/Claude does not replace Fable's identity;
- the conversation system detects a fluent candidate that agrees on the conclusion but violates voice, relationship context, evidence, or disagreement intent;
- first-pass behavior, bounded corrections, privacy egress, and end-to-end latency meet defined release thresholds under realistic workload;
- API requests can be inspected for identifiers and sensitive inferences, including leakage accumulated over multiple turns; disclosures are visible and controllable;
- offline and declined-egress behavior is honest about what works locally and what needs the service.

The planned architecture is a testable product hypothesis. A.L.I.C.E. is the first research instance; its Elaina-derived source identity and private material must never be copied into another person's Fable. We will implement and test the transferable conversation capability in A.L.I.C.E. before declaring consumer parity.

See the [Fable README](../README.md) for the product story, the [A.L.I.C.E. README](https://github.com/NIne-WIngEd/A.L.I.C.E/blob/main/README.md) for the flagship research system, and [*The Second Mind*](../comic/STORYBOARD.md) for the behavioral destination.
