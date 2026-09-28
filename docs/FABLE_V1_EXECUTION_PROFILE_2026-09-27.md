# Fable v1 full personal-cognitive execution profile

**Date:** 2026-09-27  
**Version:** 2.0.0  
**Status:** first-release architecture authority  
**Supersedes:** the earlier same-day “minimum local physical profile” interpretation

## 1. Principle

Fable v1 is **not** a lightweight, reduced, minimum-service, laptop-capped, small-memory, or narrow-gate edition of the destination.

The first release ships the **full transferable personal/cognitive architecture** that A.L.I.C.E. proves and that the Fable README, first-release design, *The Second Mind*, and product-family parity documents describe.

The only capability class deliberately supplied by replaceable external GPT/Claude-class services in the first release is **general feature-model capability**: broad language generation, coding, research, simulation, vision/image generation/editing, and similar feature work.

External providers do **not** own:

- identity or personality;
- user/host understanding;
- relationship state;
- Fable self/continuity;
- Experience history;
- Claim authority;
- memory formation;
- episodic/autobiographical memory;
- graph/relational memory;
- semantic/multimodal memory;
- retrieval planning;
- native personal judgment;
- goals/missions;
- procedural learning;
- outcome learning;
- personal-model evolution;
- deletion/rollback;
- continuity across provider/model replacement.

The governing rule is:

> **Least vendor knowledge, not least local intelligence.**

## 2. Capability architecture

Every Fable v1 installation has the same logical personal architecture. Hardware changes **placement and execution**, not which cognitive planes exist.

### 2.1 Evidence and durable memory

- encrypted content-addressed Raw Evidence/Object plane;
- replayable Experience/Event Fabric;
- bitemporal Claim Authority;
- episodic/autobiographical memory;
- correction, supersession, deletion, revocation and rollback lineage.

### 2.2 Cognitive retrieval

- Cognitive Multi-Graph with semantic, entity, temporal, causal, evidence, social, relationship, mission, skill, identity, world/model-lineage and outcome views;
- associative graph computation such as Personalized PageRank, spreading activation, temporal decay, inhibition and path/bridge discovery;
- dense/sparse/multivector semantic and multimodal retrieval;
- exact/source-native/live retrieval;
- dynamic scene/domain membership;
- iterative/parallel Retrieval Orchestration;
- invocation-scoped evidence-consumption receipts and memory-use calibration.

### 2.3 Personal cognition

- Personality/identity capability;
- Memory Formation Model;
- user/host model;
- relationship model;
- Fable self/continuity model;
- world/social/causal models;
- source-trust and uncertainty state;
- Mission Graph/goals;
- procedural/skill memory;
- native personal judgment before feature-model generation;
- outcome-driven personal development.

The five headline personal roles remain starting capability roles. They are **not** a fixed model count, file count, parameter budget, or representational ceiling.

### 2.4 Learned/parametric personal memory

Fable may learn personal state into:

- identity/judgment weights;
- MFM weights;
- host/relationship/self updaters;
- retrieval/ranking/router models;
- procedural policies;
- adapters;
- perceptual personal-memory banks;
- future first-party conversation/reasoning models.

Parametric state never becomes the only historical authority. Training-data/influence lineage remains inspectable enough for correction, deletion response, rebuild or governed unlearning.

### 2.5 Working and activation memory

The architecture also governs transient state:

- Cognitive Workspace;
- active missions/plans;
- live context;
- temporary summaries;
- pending tools/actions;
- model/cache generations where controllable.

Deleting a durable record without handling derived active state is not sufficient forgetting.

### 2.6 Multi-device continuity

The first-release architecture includes:

- host/product namespace;
- device identity;
- causal/logical clocks;
- replay positions;
- conflict/reconciliation receipts;
- encrypted custody domains;
- projection generations;
- offline continuation and later reconciliation.

A one-device user still has the same architecture. Multi-device support is not a different, “larger” Fable class.

## 3. Memory formation

Fable uses both fast and slow memory formation.

### Fast path

Immediately after an authorized experience:

- append to Experience/Event Fabric;
- authenticate and provenance-bind;
- classify subject/time/device/custody;
- preserve original evidence;
- build safe exact/lexical/vector/perceptual keys;
- maintain temporal ordering.

### Slow path

Asynchronously, the Memory Formation system can propose:

- claims;
- episodes;
- graph relations;
- scene/domain state;
- user/relationship/self/world/mission updates;
- procedural lessons;
- consolidation;
- retention/importance;
- model-training candidates.

Learned formation never directly grants Claim authority.

## 4. Selected current physical architecture

The architecture is polyglot because the memory problems are different.

| Plane | Current selected implementation |
| --- | --- |
| Raw Evidence/Object | encrypted content-addressed storage behind an S3-compatible abstraction |
| Experience/Event | NATS JetStream behind Fable-owned event/evidence contracts |
| Claim Authority | XTDB v2 bitemporal store |
| Episodes | governed derived episode plane linked to Event/Claim identities |
| Cognitive Multi-Graph — host-local | LadybugDB |
| Cognitive Multi-Graph — scale-out | JanusGraph with a qualified distributed storage backend |
| Existing A.L.I.C.E. graph reference | Neo4j retained for migration/reference evidence |
| Associative graph compute | first-party engine-independent compute layer |
| Vector/Multimodal | Qdrant Edge/server/cluster |
| Source-native/live | files, FTS, SQL/structured stores, approved connected-source APIs |
| Perceptual memory | grounded specialist representations linked to exact evidence |
| Durable workflows | Temporal |
| Shared ephemeral workspace | Valkey, with process-local L1 |
| Model/data lineage | content-addressed signed/hashed registry |
| Personal-model training | PyTorch + Accelerate with hardware-adaptive distributed execution |

This table chooses current implementations. It does **not** define permanent ceilings. Replacement remains possible when a concrete capability, scale, reliability, privacy, deletion, distribution, licensing, or cost issue justifies it.

## 5. Hardware adaptation is not capability adaptation

A Fable installation can use:

- one workstation;
- multiple local devices;
- NAS/storage server;
- owner-controlled home cluster;
- private remote GPUs;
- private distributed cluster;
- later owner-authorized hybrid/remote infrastructure.

FBM may choose:

- placement;
- sharding;
- replication;
- precision;
- batch/accumulation;
- cache policy;
- indexing layout;
- graph partitioning;
- training schedule;
- model-serving topology.

FBM may **not** respond to weak hardware by silently deleting a cognitive plane or permanently shrinking the intended model.

If the requested full build cannot fit the available hardware, Fable must tell the owner what is required or use an owner-authorized compute path. The user's laptop does not become the architecture ceiling.

## 6. Conversation and feature APIs

The local personal foundation makes the native verdict first.

A feature provider receives only the allowed task/context required for its replaceable feature job. Its candidate is checked locally against:

- stance;
- evidence;
- uncertainty;
- personal judgment;
- relationship behavior;
- voice/expression obligations;
- privacy/egress policy.

A provider swap must not change who the Fable instance is.

## 7. Deletion and unlearning

Deletion is a cross-layer influence operation.

A revocation can require work across:

- raw objects;
- events;
- claims;
- episodes;
- graph projections;
- vector/multimodal indexes;
- summaries;
- workspace/context;
- active plans;
- caches/KV generations where controllable;
- replay/training datasets;
- model/adapters influenced by the source;
- backups/exports/replicas.

For reconstructible runtime state, Fable may use provenance-guided restore/replay to reach the record-omitted counterfactual state.

For personal model parameters, the system uses the strongest available governed action: exclusion from future training, affected-model rebuild, sharded retraining, verified unlearning, generation quarantine, or explicit disclosure when exact removal is not established.

External memory and model parameters must not recontaminate each other after a deletion.

## 8. First-release critical loop

A qualified Fable must execute:

```text
authorized experience
  -> Experience/Event
  -> Formation Context Planner
  -> MFM fast/slow formation
  -> deterministic Memory Gate
  -> Claim Authority
  -> Episodes / Multi-Graph / Vector / personal-state / procedural projections
  -> Memory Resource Manager
  -> Retrieval Orchestrator / Cognitive Recollection
  -> native personal judgment
  -> checked feature-model expression/action
  -> observed outcome
  -> Experience
  -> governed host/relationship/self/procedural/model revision
```

This is one developing entity. It is not a set of disconnected specialist bots.

## 9. First-release release gate

Fable v1 is not ready until a fresh authorized user corpus can produce an entity that:

1. builds without A.L.I.C.E.-private data or weights;
2. forms and uses every required memory plane;
3. develops user, relationship and Fable-self state separately;
4. uses MFM behind deterministic authority;
5. performs adaptive cognitive recollection across the relevant planes;
6. makes native personal judgments before external feature generation;
7. rejects/corrects generic or identity-inconsistent feature drafts;
8. learns from outcomes;
9. preserves continuity across model/provider/device replacement;
10. supports correction/deletion/revocation across durable, execution and parametric influence;
11. survives restart/restore/migration;
12. supports multi-device continuity;
13. scales placement without reducing cognitive capability;
14. passes the comic/product behavior suite;
15. remains user-owned, inspectable and reversible.

## 10. Explicit non-ceilings

The following can be current operating values. None is a permanent Fable capability limit:

- number of personal models;
- parameter count;
- context length;
- graph size/depth;
- vector count;
- event count;
- episode count;
- scene/domain count;
- relation vocabulary;
- evidence field count;
- device count;
- memory/storage size;
- training steps;
- number of retrieval passes;
- autonomy horizon;
- number of missions;
- deployment topology.

The system expands, migrates or changes architecture when capability evidence requires it.

## 11. Validation rule

Do not repeat MC10.

Validate enough to answer a real implementation or capability question. Do not run all-backend tournaments or Cartesian substitutions.

But the inverse is equally important:

> **Do not preserve an inferior implementation merely because changing it would require work.**

The selected architecture must remain the strongest justified path for the actual Fable objective. Simplicity is an engineering optimization only after capability is protected.
