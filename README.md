# Fable Sleight

**Build an AI that belongs to your life, without becoming an AI researcher first.**

Imagine installing an app, choosing the files and accounts it may learn from, and letting it build the parts of a personal intelligence around you. It remembers why you made decisions. It can connect work, family, health, money, and the projects you keep starting. It learns from what happens next. As its abilities improve, you can inspect, correct, export, and keep the personal system it has built.

That is the product we are building. **Fable Sleight is the builder and runtime. Your Fable is the continuing entity it builds.** Neither is one downloadable language model with a personality prompt attached.

> **Development status — September 2026:** This is a research and product plan, not a downloadable consumer application. The upstream A.L.I.C.E. project has working foundations in evidence, memory, conversation, information access, and cognitive state. The Fable Builder Model and personal-model research are active. Automatic formation of a complete consumer Fable, locally trained feature models, and the end-to-end learning loop have not been demonstrated or shipped.

## Why one more AI?

Ari's professor tells him to protect his research time. His father tells him to take the stable offer. His mother asks if he is eating and sleeping. Each knows something real about him. None sees the entire decision: the research opportunity, the bills, the work he loves, and what he can actually sustain. His coding agent, calendar, and research assistant have the same problem in software. Each can finish a task. Ari is left to reconcile the advice.

Fable's goal is a second mind that can follow the whole story. It should remember the reasons behind a choice, notice when advice from one part of life conflicts with another, and change its view when the outcome proves it wrong. The user should not have to retell years of context to ask a meaningful question.

We call that an **entity**: one continuing identity and relationship with the user, supported by several cooperating models and records. It can use agents and tools to do work. Its identity is more than any one agent, tool, provider, or chat session.

The user and their Fable are distinct. Fable learns the person's values and aspirations from evidence and interaction; it does not ask them to declare a perfect self at setup and treat that answer as permanent truth. It develops its own point of view and should be able to explain a disagreement. We still have to prove that such judgment comes from learned personal state rather than a generic model response.

## How a Fable gets built

1. **Install and grant access.** The planned desktop app asks the user which local folders and optional connected sources it may use. It previews scope before ingestion. A small corpus is enough to start, but sparse evidence must remain uncertain; no data volume guarantees a faithful model.
2. **Form a personal foundation.** The Fable Builder Model (FBM) interprets authorized material, tracks its source, distinguishes observation from inference, and marks what is unknown. Synthetic scenarios may help test behavior; they must never become invented memories.
3. **Build and connect components.** The builder trains or initializes the personal components that the available evidence and hardware can support. The system links them to memory, missions, experience, evaluation, and replaceable general-purpose reasoning tools.
4. **Live, learn, and revise.** The entity records important decisions and outcomes, proposes updates, tests whether a change actually helps, and preserves a route to correction, rollback, and deletion. It may add specialist capabilities when there is a demonstrated need and a viable training path.

This is the destination workflow. An `.exe`-simple experience is our product aim, not a current download or a claim that a laptop can pretrain a GPT-scale frontier model from a person's files.

### Five starting personal roles

Our current design starts with five **roles**, not five already released checkpoints. Their exact packaging may change as we test whether a role needs learned weights, structured state, or both.

| Role | What it needs to learn or preserve |
| --- | --- |
| **Personality / identity** | Fable's starting character, formed from evidence about the user's patterns and aspirations while keeping uncertainty visible. |
| **Host / user model** | The person's goals, constraints, preferences, habits, and changes over time. |
| **Memory Formation Model (MFM)** | What new experience means, which claims are supported, what should be remembered, and when a belief should be revised. |
| **Relationship model** | The shared history, trust, expectations, and ways the user and Fable work together. |
| **Fable self model** | The entity's own developing posture, judgments, lessons, and continuity after activation. |

The *Experience Ledger* and evidence store are essential parts of this foundation. They are records and governing infrastructure; calling every database a trained model would hide the hard problem. A.L.I.C.E., our first research case, has a separate source-person identity as well as an owner and an assistant self. A general user's Fable begins from the user/Fable distinction. Private A.L.I.C.E. identity data does not become a consumer default.

### The larger model map

We envision **up to 25 candidate specialist roles** inside one Fable. This is a planning map, not a claim that 25 models are built, required for everyone, or equally useful. Roles may share weights, split into multiple models, or remain structured systems after evaluation.

| Personal continuity (1–5) | Understanding and judgment (6–10) | Work and expertise (11–15) | Perception and interaction (16–20) | Learning and coordination (21–25) |
| --- | --- | --- | --- | --- |
| 1. Personality / identity | 6. Goals and missions | 11. Research | 16. Vision | 21. Skill learning |
| 2. Host / user | 7. Personal judgment | 12. Coding | 17. Speech understanding | 22. Tool routing |
| 3. Memory formation | 8. Planning | 13. Mathematics | 18. Voice generation | 23. Model evaluation |
| 4. Relationship | 9. Source trust | 14. Simulation | 19. Document understanding | 24. Model building and repair |
| 5. Fable self | 10. Uncertainty / calibration | 15. Creative work | 20. Multimodal context | 25. Outcome learning |

The roster is expandable by the user and governed by evidence, compute, and evaluation. A person should not need 25 installed heavyweight models to get a useful Fable. FBM is the builder that constructs and maintains the stack; it is separate from the personality it builds.

## What runs the difficult tasks?

**Now:** Upstream work focuses on evidence, relational and memory foundations, FBM process capture, and the personal stack. General coding, research, and deep reasoning can use existing models or optional services where appropriate. A remote API is not a local computation. If the product offers one, it must disclose what leaves the device and require the user's choice. Offline-only operation and feature parity are goals to qualify, not facts about a shipping product.

**Next:** Train and evaluate Fable-owned general capability models where the data, compute, and measurable advantage justify it. This is separate from learning a particular user's life.

**Long term:** Automate the construction, adaptation, evaluation, and replacement of more specialist capabilities on hardware the user controls or explicitly chooses. Building *any* frontier feature model from scratch on a consumer PC is an open research ambition, not an established capability. Existing weights, licensed models, and APIs can be replaceable engines while the user's personal continuity remains theirs.

## Ownership has to mean something concrete

We intend each Fable to have its own keys and isolated personal state. The person should be able to inspect why it believes something; correct a claim; review what trained a personal component; revoke a source; delete and rebuild affected state; export a portable identity and model package; and roll back a harmful update. Software updates should not silently overwrite learned identity.

The default product design is local and user controlled. A local build reduces exposure of raw personal data, but privacy still depends on permissions, encryption, backup handling, and any network features the person enables. None of those protections is certified for a released Fable app today.

## Where we are, and what comes next

| Stage | Work | Exit evidence |
| --- | --- | --- |
| **Research now** | A.L.I.C.E. develops the transferable cognitive foundations. FBM captures repeatable formation operations. N0 tests semantic and relational foundations. | Exact-version research receipts; failures retained and understood. |
| **Personal foundation** | Connect evidence, memory formation, host/self/relationship state, missions, judgment, and outcomes. | Changing relevant learned state changes relevant decisions; unrelated behavior stays stable. |
| **Consumer alpha** | Package a desktop installer and consent-based local ingestion for a small cohort. | Independent hosts stay isolated; users can inspect, correct, export, restore, and delete their data. |
| **Capability expansion** | Add usable work tools and evaluated specialist models, initially including replaceable external engines. | Real tasks improve without claiming the API's weights are personally owned. |
| **Model factory** | Automate training and promotion of more user-specific and general specialists. | Reproducible gains, hardware budgets, portability, and rollback across model versions. |

**Planning horizon, not a release promise:** The first two stages are the present research focus. A consumer alpha is a subsequent milestone; broader specialist training and an automated feature-model factory are later, multiyear goals. We will date product releases when the dependent tests and hardware path are credible. A.L.I.C.E. is the upstream research system; transferring a capability to Fable requires evaluation and consumer isolation. The old Friday project name may still appear in upstream governance records.

## How this compares

There are serious neighboring products. [Replika](https://replika.com/) builds an AI companion. [Personal AI](https://www.personal.ai/your-true-personal-ai) describes a personal memory stack and a personal language model trained on it. [Ollama](https://ollama.com/) makes local models accessible. We should not claim that no one offers memory, a companion, a personal model, or local ownership.

Fable's proposed product is the **consumer model-building loop** across a continuing personal entity: source-governed formation, multiple cooperating personal components, evidence-linked change through experience, user-controlled portability, and progressively replaceable feature engines. That combination is our bet. It is still a hypothesis to prove against these existing options in user studies and working demonstrations.

## The company question

Can we make building and maintaining a personal AI as ordinary as installing software, while preserving the user's control over the intelligence that grows from their life? That is the question behind Fable Sleight and the starting point for our YC application.

This repository begins with the product thesis. Code and product evidence will be added as capabilities qualify for consumer transfer.
