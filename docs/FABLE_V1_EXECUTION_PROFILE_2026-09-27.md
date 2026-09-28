# Fable v1 execution profile — full personal cognitive fabric

**Date:** 2026-09-27  
**Version:** 2.0.0  
**Status:** first-release technical execution authority  
**Supersedes:** the earlier same-day reduced physical-profile interpretation

## 1. Principle

Fable v1 is the first consumer release of the **full transferable personal architecture** proven through A.L.I.C.E.

It is not:

- a lightweight edition;
- a memory demo;
- a smaller intelligence tier;
- a five-model ceiling;
- a desktop-only cognitive profile;
- a PostgreSQL-only memory implementation;
- a version that postpones graph, multimodal, episodic, self, relationship, procedural, mission, deletion/unlearning, or multi-device semantics.

The user experience may be simple. The architecture behind the installer does not have to be.

The governing rule is:

> **Deployment topology may adapt to hardware. Cognitive capability may not be removed to simplify deployment.**

And the privacy/product rule remains:

> **Least vendor knowledge, not least local intelligence.**

External GPT/Claude-class systems can supply replaceable general feature capability in v1. They do not own Fable's memory, identity, judgment, learning, relationship, self, mission state, procedural experience, or continuity.

## 2. What Fable v1 must contain

### 2.1 Personal learned state

FBM may create more than these five roles, but the initial named roles remain:

1. personality / identity;
2. Memory Formation Model;
3. host / user model;
4. relationship model;
5. Fable self / continuity model.

Additional learned personal components can include:

- retrieval planners;
- importance/retention models;
- episode formation;
- temporal/causal interpretation;
- source trust;
- preference/judgment rankers;
- procedural policies;
- perceptual identity memory;
- adapters;
- challenger models;
- future first-party conversational or feature models.

There is no fixed total model count, parameter count, context size, graph size, history size, device count, or deployment topology.

### 2.2 Full memory architecture

The first release includes all of these logical planes:

- Raw Evidence/Object;
- Experience/Event;
- bitemporal Claim Authority;
- Episodes/Autobiographical memory;
- Cognitive Multi-Graph;
- associative graph retrieval;
- vector/multimodal retrieval;
- source-native/live retrieval;
- perceptual personal memory;
- host/source/relationship/self/world/social/causal/mission/skill projections;
- parametric personal memory;
- working/activation memory;
- Memory Resource Manager;
- Retrieval Orchestrator / Cognitive Recollection;
- Lifecycle Curator;
- correction/deletion/unlearning;
- durable workflows;
- model/dataset lineage;
- multi-device/federation semantics.

A query may use only a subset of these planes. The product still contains the architecture required to use the others when needed.

## 3. Selected current physical architecture

The current implementation choices are selected from the full capability requirements. They are replaceable adapters, not the definition of Fable's cognition.

| Plane | Selected implementation |
| --- | --- |
| Raw evidence / large objects | encrypted content-addressed local/NAS/private-object storage behind an S3-compatible abstraction |
| Experience/Event Fabric | NATS JetStream behind Fable-owned EvidenceLog/event contracts |
| Claim Authority | XTDB v2 bitemporal authority |
| Episodes | governed derived episode store linked to Event/Claim identities |
| Cognitive Multi-Graph — local | LadybugDB |
| Cognitive Multi-Graph — scale-out | JanusGraph with qualified distributed storage |
| Associative graph compute | engine-independent PPR / spreading activation / temporal decay / inhibition / path compute |
| Vector/Multimodal | Qdrant Edge, server, or cluster placement |
| Exact/source-native | local files, SQL/FTS, metadata, code/source search, authorized connected-source reads |
| Perceptual personal memory | grounded specialist representations linked to exact source evidence |
| Personal cognitive projections | governed versioned state/models over the memory fabric |
| Parametric personal memory | Fable-native learned model generations with dataset/influence lineage |
| Working/activation state | Cognitive Workspace plus execution-state provenance |
| Durable workflows | Temporal |
| Shared ephemeral state | process-local L1 plus Valkey |
| Model/data registry | content-addressed signed/hashed lineage |
| Training | PyTorch + Accelerate with DDP/FSDP/offload selected from measured hardware need |
| General feature capability | replaceable GPT/Claude-class APIs where the owner permits egress |

### Why NATS JetStream for events

Fable needs replayable ordered experience, durable consumers, local/private deployment, edge/multi-device use, and a permissive distribution model. JetStream supplies the transport/storage substrate while Fable owns event identity, expected-version semantics, causal/device clocks, correction/deletion lineage, evidence binding, and projection checkpoints.

KurrentDB remains a strong event-store reference/challenger. It is not the universal product dependency because the current KLv1 license boundary is less suitable for a widely distributable host-owned platform.

### Why XTDB v2 for claims

Claim authority is fundamentally bitemporal:

- what was valid/effective when;
- what the system knew when;
- what was corrected or superseded later.

XTDB v2 directly expresses valid time and system time. That is a closer semantic fit than rebuilding the entire contract manually in ordinary PostgreSQL.

The Claim writer may be serialized or authority-sharded. That is acceptable because claim acceptance is controlled authority work, not the raw high-volume event stream.

### Why a real graph plane exists in v1

A person's life is not just rows plus embeddings. Fable needs:

- causal links;
- temporal chains;
- people and relationships;
- missions and dependencies;
- projects and skills;
- evidence and provenance;
- identity and self-state;
- outcome and decision history;
- model/data lineage.

The host-local placement uses LadybugDB. Larger private deployments can use JanusGraph. The logical graph contract is the same.

### Why Qdrant is not optional architecture

A specific query may not need vector retrieval. The **capability** still ships because fuzzy episodic recall, semantic paraphrase, image/audio/video retrieval, late interaction, sparse+dense fusion, and multimodal memory cannot be replaced by exact search alone.

### Why Temporal stays in the product architecture

Deletion, rebuild, training, migration, model promotion, multi-device reconciliation, long missions, and self-improvement are durable workflows. A consumer installer can self-host the workflow service. Hiding a daemon from the user is packaging; deleting durable-workflow semantics is capability reduction.

## 4. Memory behavior

### Fast formation path

Every authorized experience can immediately:

- enter the event ledger;
- bind source, subject, time, device, custody, and permissions;
- gain exact and retrieval keys;
- remain reconstructible;
- participate in temporal ordering.

No fast-path index result becomes fact authority.

### Slow formation path

Asynchronous formation can propose:

- claims;
- episodes;
- dynamic scenes/domains;
- graph edges;
- behavioral/trait projections;
- host/relationship/self updates;
- skills/procedures;
- retention decisions;
- training candidates.

MFM proposes. Deterministic authority decides where authority is required.

### Dynamic scenes, not a fixed life ontology

Fable can organize memory around overlapping learned contexts such as:

- school;
- work;
- research;
- a relationship;
- a project;
- a mission;
- a place;
- a role;
- an interest;
- a recurring situation.

These are learned/contextual memberships. No fixed Life/Work/Interest taxonomy limits the product.

## 5. Cognitive recollection

A query does not follow one hard-coded retrieval ladder.

The planner may use, in parallel or iteratively:

- Claim Authority;
- exact/source-native evidence;
- episodes;
- graph views;
- associative activation;
- vector/multimodal retrieval;
- procedural memory;
- host/relationship/self state;
- mission/project state;
- live systems of record.

Then it:

1. reconciles candidates with authority/provenance;
2. records evidence actually opened;
3. calibrates memory influence;
4. checks evidence sufficiency;
5. recollects, expands sources, asks, defers, or abstains when necessary.

## 6. Conversation and feature APIs

The native path is:

```text
user turn
 -> Fable memory/context
 -> Fable native personal judgment
 -> versioned verdict/expression contract
 -> bounded provider request
 -> provider candidate
 -> local comparison/correction
 -> final response/action
 -> outcome
 -> governed learning
```

The feature provider can generate language, code, research output, simulations, images, or other general-purpose work. It cannot redefine:

- who the Fable is;
- what it remembers;
- what it believes;
- what evidence is authoritative;
- what it learned about the host;
- what its relationship state is;
- what its native judgment was;
- what personal update gets promoted.

Provider replacement must preserve the personal entity.

## 7. Correction, deletion and unlearning

A deletion request is not "delete one row."

The influence coordinator traces:

- raw source;
- event history;
- claims;
- episodes;
- graph relations;
- vector/multimodal entries;
- summaries;
- workspace/context;
- active plans;
- caches/KV generations where controllable;
- replay/training data;
- synthetic derivatives;
- model/adaptor generations;
- exports/backups;
- replicas.

Exact running-state removal can require restoring a clean provenance boundary and replaying the sanitized suffix.

Parametric influence is handled through the strongest qualified method available: dataset removal, rebuild, shard/retrain, verified unlearning, generation retirement/quarantine, and explicit disclosure where exact removal is not established.

Deleted external memory must not re-teach a scrubbed model. Residual model influence must not regenerate deleted external memory.

## 8. Hardware adaptation without capability reduction

FBM/runtime may choose:

- one consumer PC;
- workstation;
- multiple local devices;
- NAS;
- home/private cluster;
- owner-authorized remote compute;
- hybrid private infrastructure.

It may vary:

- sharding;
- replication;
- batch size;
- precision;
- offload;
- indexing placement;
- storage tiers;
- worker count;
- scheduling;
- cache placement.

It may **not** remove cognitive planes because the machine is small.

When the full qualified build cannot fit current hardware, Fable reports the requirement or uses owner-authorized compute. It does not silently become a smaller intelligence tier.

## 9. First-release critical path

1. FBM ingests authorized user sources and outside foundation material.
2. FBM builds the connected personal model set and memory substrate.
3. MFM forms governed memory proposals.
4. Memory authority records Experience and Claims.
5. Episodes, graph, vector, scene, host, relationship, self, mission, procedural, and other derived state are built.
6. Retrieval/Cognitive Recollection assembles evidence.
7. Fable native judgment emits a versioned verdict.
8. A replaceable feature engine supplies general-purpose output where authorized.
9. The local controller validates/corrects the candidate.
10. Outcomes return to Experience.
11. Host, relationship, self, procedural, retrieval, and personal-model state can evolve through governed promotion.
12. Identity and continuity survive model/provider/device replacement.

## 10. Release gate

Fable v1 is not ready until a fresh host corpus can produce an entity that:

- builds without A.L.I.C.E. private state;
- runs the complete memory fabric;
- develops user, relationship, and Fable-self state;
- forms and revises memory through MFM + authority;
- performs graph/vector/source-native/episodic/procedural/multimodal recollection;
- makes native personal judgments;
- rejects identity-inconsistent provider output;
- learns from outcomes;
- supports Mission Graph and Cognitive Workspace;
- survives restart/restore/migration/device change;
- preserves continuity across provider/model replacement;
- performs cross-layer correction/deletion/unlearning;
- scales physical placement without removing logical capability;
- passes the comic/product behavior suite.

A small memory demo, a limited model count, or a simplified desktop-only cognitive profile cannot satisfy this gate.

## 11. Validation rule

Do not run backend tournaments.

Open a challenger only if the current implementation creates a real decision in:

- capability/fidelity;
- correctness/provenance;
- scale;
- latency/resource use;
- deletion/unlearning;
- recovery;
- privacy/custody;
- licensing/distribution;
- installer/runtime reliability.

Validate the selected full architecture. Then build the product.
