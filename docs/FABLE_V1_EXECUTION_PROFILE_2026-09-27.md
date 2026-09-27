# Fable v1 execution profile — capability parity without infrastructure parity

**Date:** 2026-09-27  
**Status:** first-release technical execution decision

## Principle

Fable v1 inherits A.L.I.C.E.'s personal-intelligence contracts and successful capabilities. It does **not** need to reproduce A.L.I.C.E.'s full research/deployment topology process-for-process or daemon-for-daemon.

The product promise is a local personal foundation that learns and judges as one developing entity. Infrastructure is selected for that outcome.

## Required logical capabilities

Fable v1 must preserve:

- evidence/Experience history distinct from adjudicated Claim authority;
- source/host/Fable-self/relationship separation;
- Memory Formation proposals behind deterministic authority;
- temporal correction, supersession, deletion and rollback;
- exact/source-native, semantic and relationship/graph-aware retrieval;
- native personal judgment before replaceable language generation;
- outcome-driven learning;
- inspectable provenance and model/data lineage;
- provider replacement and offline core operation.

## Selected local physical profile

The first-release desktop profile uses the minimum set of physical services that preserve those capabilities:

| Role | Fable v1 default |
| --- | --- |
| Experience/Event + Claim persistence | local PostgreSQL instance managed by the Fable runtime, with separate event and bitemporal-claim schemas/contracts |
| Raw evidence, user corpus, checkpoints, exports, backups | encrypted content-addressed local object/file store |
| Relationship/graph state | governed relation tables and graph projection contract over PostgreSQL for the default desktop profile; a graph engine may be added when measured host scale or traversal behavior needs it |
| Semantic/multimodal retrieval | local Qdrant profile when the installed capability set uses semantic/multimodal retrieval; exact/source-native search remains available without it |
| Exact/current-source retrieval | direct local file/metadata/SQL search and live connected-source reads when authorized |
| Workspace | in-process memory; no separate cache daemon by default |
| Durable workflows | local durable job runner implementing the shared workflow contract; Temporal is not a mandatory desktop dependency |
| Personal models | local native Fable/A.L.I.C.E.-derived personal components built by FBM |
| General language/coding/research/vision features | replaceable GPT/Claude-class APIs through the governed local controller when authorized; local qualified alternatives may replace them |
| Artifact lineage | content-addressed manifests and hashes; no mandatory MLflow service |

This profile may later expand to Neo4j, Temporal, Valkey, distributed object storage, private clusters or other infrastructure when the host's actual workload requires those capabilities.

## Why this is not a reduced Fable

The logical contracts are the capability boundary, not the number of daemons.

A graph capability implemented through governed relation tables is still required to preserve relationship/temporal/mission semantics. If it fails to provide the needed behavior, the profile expands rather than weakening the behavior.

A local workflow runner must still provide the required retry, idempotency, cancellation, receipt and recovery semantics for the operations assigned to it. If it cannot, the profile adopts a stronger workflow engine.

The same rule applies to retrieval: Qdrant is used where semantic/multimodal retrieval adds real value; direct source search is used where exact/fresh data is better. Fable does not automatically inject embedding matches into every conversation.

## First-release critical path

1. FBM builds the connected personal foundation from authorized user data.
2. MFM forms governed memory proposals.
3. deterministic authority writes Experience/Claim state.
4. host, relationship and Fable-self state become versioned projections.
5. Context Planner assembles relevant evidence.
6. native personal judgment emits the response verdict.
7. a replaceable language engine drafts expression where needed.
8. local controller accepts/corrects the draft against the personal verdict.
9. outcomes feed governed future development.

The release gate is whether this loop behaves as a coherent personal intelligence for a fresh user. It is not whether Fable reproduces A.L.I.C.E.'s research infrastructure.

## Validation budget

Do not run backend tournaments for Fable v1.

Open an infrastructure challenger only when the selected local profile causes a demonstrated problem in:

- personal fidelity or memory quality;
- correctness/provenance;
- deletion/rollback;
- scale;
- latency/resource use;
- privacy/custody;
- installer/runtime reliability;
- licensing/distribution;
- offline operation.

Otherwise build the product.
