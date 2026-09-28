<p align="center">
  <img src="assets/fable-overview.svg" alt="Fable Sleight: your chosen data goes into the Fable Builder to create a continuing personal AI" width="100%">
</p>

<p align="center">
  <a href="#why-you-need-a-personal-ai">Why you need it</a> ·
  <a href="#the-idea-behind-fable">The idea</a> ·
  <a href="#the-personal-foundation">The foundation</a> ·
  <a href="docs/FIRST_RELEASE.md">First release</a> ·
  <a href="#the-roadmap">Roadmap</a> ·
  <a href="#who-else-is-working-on-this">Comparison</a>
</p>

---

## I'm gonna give you the infrastructure to build a personal model you can call yours.

Let's say you use ChatGPT or Claude. OpenAI or Anthropic built the model. You just use it. But you don't want your whole life inside someone else's AI. You don't wanna feed it all your data.

So for a while you turn to local open-weight models. You can personalize them, keep your data on your machine, and they feel more like yours. But you're still not really satisfied. Cause the open weights you got, You don’t own those open weights. You can’t claim those weights or that model as yours.

Then you realize all you want is the infrastructure that builds you a model from scratch. So it runs locally, and the personal weights you get you can truly call yours. You finally realize what a **personal model** means.

Fable itself is not the model. Fable is the builder.

**At Fable Sleight, I will give you exactly that. I will give you an automated infrastructure that makes you a personal model that is truly yours.**

But that's only half the story. Owning the model is the start. What it remembers, how it judges, and how it grows with you is the other half.


<p align="center">
  <img src="assets/model-ownership.svg" alt="Three model paths: external ChatGPT or Claude use provider-built weights; local Qwen through Hugging Face starts with pretrained weights you can adapt; Fable Sleight aims to build personal weights for you locally. First-release feature tasks still plan to use external APIs." width="100%">
</p>

## The idea behind Fable

### One life. Too many versions.

Your teacher sees the student. Your mother sees her child. Your friends see who you are with them. Your coding agent sees the project. Each knows a real version of you. None sees the whole picture.

The advice starts to conflict. Your teacher tells you to protect your research. Your family wants you to take the safe job. One AI agent fills your calendar while another tells you to rewrite the project. You're the only one who knows why each thing matters. But now you're out of ideas too.

You wish there were someone who already knew your whole life context. The first thought is a clone of you. It would know every choice you made and why you made it. No years of backstory every time you ask for help. But a clone would have your blind spots too. If you can't see a way forward, it might be just as stuck. If you're avoiding a hard decision, it might help you justify it.

So the wish changes. You want the **perfect version of you**: someone who knows your life, remembers what you forget, sees what you miss, and can solve the problems you can't. Someone who can challenge you because it understands you. **That's where Fable comes in.** It takes its starting character from you, develops its own judgment, and grows with you.

The other half is Fable's personal foundation. It is meant to:

- **Remember what happened.** The Experience Ledger keeps a history of experiences, Fable's decisions, and their outcomes.
- **Know where a belief came from.** Fable tracks its sources. It keeps facts, guesses, and corrections distinct.
- **Understand both of you.** It learns about you, its own developing self, and the relationship between you without confusing one for another.
- **Bring the right context to a decision.** It draws on relevant memories, goals, and changes when you need help.
- **Learn from what follows.** Outcomes should change its future judgment when warranted, including when it should disagree with you.

> **See the idea as a story:** [Read *The Second Mind*, the interactive A.L.I.C.E. comic](https://raw.githack.com/NIne-WIngEd/Fable_Sleight/main/comic/index.html). It shows the destination we are building toward, not a finished product. [Read the complete 64-page storyboard](comic/STORYBOARD.md).

> [!NOTE]
> **Where we actually are — September 2026:** Fable is not a downloadable consumer app yet. A.L.I.C.E. has working research foundations in evidence, memory, conversation, information access, and cognitive state. The Fable Builder Model is an active research workstream. We have not demonstrated a complete automatic consumer build, an end-to-end learned judgment loop, or user-owned frontier feature models.
> [Read the build diary and roadmap](#the-roadmap).

## Why you need a personal AI?

Everyone deserves their own AI. Right now, we have AI agents for different tasks, but not an AI companion that knows us. We keep asking the same general models to reason about different people's lives. But we as humans are different. We reason differently. We want different things. So why should we all be treated by the same standard?

Even local models you can download and personalize usually come pretrained with someone else's weights. You can give them your files and teach them your preferences, but you are still working on top of a model built for everyone. The model grows with its manufacturing company, not with you.

## Why Fable matters

You cannot ask everyone to build their personal AI from scratch. Most people do not know how to train a model. Even if they do, choosing the architecture, preparing data, checking whether it learned the right thing, and keeping it updated takes years of research and manual labor.

So why don't we automate that process? Give Fable access to the raw data you choose. Let the builder create the personal pieces, link them into one entity, and keep improving them as it learns more about you. You should not need to code to get started.

The experience we want is simple. Download the software. Pick the folders and accounts you want it to learn from. Review what you are granting access to. Then let the builder do the work.

Behind that simple setup is the hard part:

1. **Understand the raw material.** Fable's builder reads authorized data, tracks where each piece came from, and separates things that happened from things it has inferred. When it does not know, it should say so. Synthetic examples can help train or test behavior; they cannot become fake memories.
2. **Build your personal foundation.** It forms the components that remember, understand you, develop a character, and learn from experience. The builder then connects them to one entity rather than handing you several disconnected bots.
3. **Give it useful abilities.** In the first release, Fable will use GPT and Claude APIs for feature tasks such as coding, research, simulation, vision, and image editing. Your personal foundation is the part we build and ship with Fable. The feature engines are services Fable can call.
4. **Let it grow with you.** When you correct Fable or a decision has a real outcome, the system should learn from it. A proposed update must be tested, versioned, and reversible. If it needs a new specialist, the builder should eventually be able to create one.

The amount of data does not determine whether you are allowed to begin. With little data, your Fable would begin with more unknowns and ask or learn over time. It cannot honestly claim to know a person from a nearly empty folder. And the `.exe` is a product goal: a consumer laptop cannot simply pretrain a GPT-scale model from someone's files.

### The personal foundation

The five names below are **the first personal capabilities FBM is meant to form and connect**. They are not a count of every model or system a Fable needs. A.L.I.C.E.'s [identity and memory architecture](https://github.com/NIne-WIngEd/A.L.I.C.E/blob/main/docs/MEMORY_IDENTITY_FORMATION_AND_HOST_LEARNING_ARCHITECTURE.md) distinguishes these roles. Its [MFM research plan](https://github.com/NIne-WIngEd/A.L.I.C.E/blob/research/mfm-foundation-20260923/docs/MEMORY_FORMATION_MODEL_FOUNDATION.md) says the builder should construct their Fable equivalents from your authorized data and suitable synthetic training examples. They may use different weights, representations, and stores.

| Starting capability | What it does |
| --- | --- |
| **Personality / identity model** | Forms a starting character and way of judging from supported evidence. Synthetic examples teach behavior without becoming fake memories. |
| **Memory Formation Model (MFM)** | Interprets new experiences and proposes memories, corrections, or unresolved questions. It does not decide what is true by itself. |
| **User / host model** | Learns your goals, habits, preferences, and changes over time. |
| **Relationship model** | Develops the shared history and ways of working between you and your Fable. |
| **Fable self / continuity model** | Keeps your Fable's own decisions, lessons, and development separate from your life history. |

That is only the beginning of the **non-feature foundation**. The [consumer product vision](https://github.com/NIne-WIngEd/A.L.I.C.E/blob/main/docs/FRIDAY_PRODUCT_VISION.md) and [capability catalog](https://github.com/NIne-WIngEd/A.L.I.C.E/blob/main/docs/CAPABILITY_CATALOG.md) also call for:

| Area | Further capabilities under research or planned |
| --- | --- |
| **Memory and context** | Episode formation, retrieval planning, context fusion, temporal and conflict interpretation, importance and consolidation. |
| **Personal understanding** | Preference and choice prediction, goals and missions, social, causal and world models, source trust, uncertainty. |
| **Judgment and growth** | Native personal judgment, reflection on outcomes, skill learning, preference rankers, and personal adapters. |

The **Experience Ledger**, evidence store, Claim Fabric, Memory Gate, and retrieval indexes are also essential. They are records or infrastructure, not automatically separate trained models. FBM is the builder that should connect and develop this stack. At installation it can only form what your data supports. Relationship history and Fable's lived experience must grow through real interaction.

There is **no fixed total model count** yet. Some later capabilities may become specialist learned models. Others may work better as structured state, tools, or shared model components. Coding, simulation, vision, and image editing are feature capabilities on top of this personal foundation. There is likewise no fixed parameter, graph, context, data, memory, device, or deployment-topology ceiling for the personal foundation.

## What will the first version include?

**Our first release goal:** ship the builder and the full personal foundation with the desktop software. The [first-release design](docs/FIRST_RELEASE.md) records the conversation boundary, source selection, privacy controls, and qualification gates. That includes memory formation, the Experience Ledger, evidence and memory architecture, user and self development, relationships, and a judgment loop that can learn from real outcomes. We want these capabilities to work at the scale the product needs. A small memory demo with disconnected models would not be the Fable we are describing.

“Full personal foundation” is an architectural commitment, not shorthand for a smaller desktop edition. Fable v1 keeps the complete transferable cognitive/memory system even when one installation places it across a workstation, multiple local devices, a NAS, or owner-authorized private compute. The installer may adapt placement and execution to hardware. It does not delete graph, episodic, vector/multimodal, source-native, procedural, self/relationship, mission, working-memory, or deletion/unlearning capability because a simpler stack would be easier to package. The [full v1 execution profile](docs/FABLE_V1_EXECUTION_PROFILE_2026-09-27.md) records that boundary.

For feature work such as coding, simulation, research, vision, and image editing, the first version will call **GPT and Claude through their APIs**. Conversation is a special case: Fable's local personal foundation makes the verdict and sets how the entity should speak. The local conversation system prepares a privacy-limited request, checks the API's candidate against that verdict and voice, and asks for a bounded correction only when needed. It must usually get the right behavior on the first try. External calls still process the information they receive. Fable should show what each request sends out and give the user control over it. The personal data store, builder, and personal learning stack are intended to run locally; an API request is not local merely because Fable initiated it.

This is the **release target, not the current state**. A.L.I.C.E. is our development case. FBM, MFM, and the complete experience-to-judgment learning loop still need to be built and validated before we can claim a consumer release with full capability and scale.

Upstream F4–F11 milestones are internal qualification steps, not smaller product editions. The first consumer release uses one predicate: `full_personal_cognitive_foundation_after_f11`. Alpha/beta labels can still describe controlled test distribution, but they do not relax that capability boundary.

Later, we want to build our own frontier feature models. After that, we want FBM to build and improve feature specialists too. Automatic frontier-model training on consumer hardware remains a research goal. We will measure the compute, cost, and data requirements rather than promise that a laptop can train a GPT-scale model from personal files.

## What does it mean to own your Fable?

You should be able to see what it learned and where a belief came from. You should be able to correct it, revoke a source, delete data and its downstream influence, roll back a bad update, and take your personal state with you. If a general reasoning provider changes, your entire relationship with your Fable should not reset.

We intend to build and keep that personal state locally by default, with separate keys and storage for each person. The software will still need to earn a privacy claim through permissions, encryption, verified deletion, and honest handling of optional cloud services. Those protections have not been certified in a released Fable app.

Owning your personal intelligence does not mean claiming that you own OpenAI's or another provider's base weights because an API answered a question. We need to be exact about what is yours: your evidence, records, learned personal components, and future models that are actually built for you.

## The roadmap

*Milestones reached since July 2026. Each one changed what I built next.*

### What we have done

- **Set the ground rules.** I began A.L.I.C.E.'s phase-based build with a Constitution for evidence, privacy, correction, and rollback. A personal AI cannot turn a guess into a fact about its owner. [Phase 0](https://github.com/NIne-WIngEd/A.L.I.C.E/commit/b73a342f)
- **Built evidence and memory.** I added vault ingestion, provenance, retrieval, and memory that handles corrections and deletion. The memory release recorded 532 passing tests on synthetic data. It was a foundation, not a finished personal mind. [Evidence](https://github.com/NIne-WIngEd/A.L.I.C.E/commit/514edd98) · [Memory](https://github.com/NIne-WIngEd/A.L.I.C.E/blob/main/docs/PHASE_2_FINAL_RELEASE_REPORT.md)
- **Made it converse and research.** Conversation state and checked response packets met a replaceable local-model adapter. Public information gained citations and freshness checks. I learned that fluent answers do not prove personal judgment. [Conversation](https://github.com/NIne-WIngEd/A.L.I.C.E/blob/main/docs/PHASE_3_FINAL_RELEASE_REPORT.md) · [Research](https://github.com/NIne-WIngEd/A.L.I.C.E/blob/main/docs/PHASE_4_LIVE_OPERATIONAL_RELEASE_REPORT.md)
- **Added a history of decisions.** The Experience Ledger and Mission Graph now have places for outcomes and goals. Memory v4 and reversible migration prototypes go beyond a simple store. Learning from an outcome to change later judgment is still open. [Ledger](https://github.com/NIne-WIngEd/A.L.I.C.E/commit/e165b53f) · [Memory v4](https://github.com/NIne-WIngEd/A.L.I.C.E/commit/15e2713a)
- **Separated Fable from A.L.I.C.E.** A.L.I.C.E. is owner-specific research. A consumer Fable must begin with *its owner's* chosen data. I also separated direct evidence, inference, and synthetic examples so training cannot invent someone's history. [Product split](https://github.com/NIne-WIngEd/A.L.I.C.E/commit/6b3a2ade) · [Identity research](https://github.com/NIne-WIngEd/A.L.I.C.E/blob/main/docs/MEMORY_IDENTITY_FORMATION_AND_HOST_LEARNING_ARCHITECTURE.md)
- **Started the builder.** I opened the Fable Builder Model workstream. Its first 60 seed examples had an answer-position bias and did not prove the process could transfer to another person. We recorded the problem. [Builder](https://github.com/NIne-WIngEd/A.L.I.C.E/blob/fable-builder-model/docs/fable-builder/README.md) · [Audit](https://github.com/NIne-WIngEd/A.L.I.C.E/blob/fable-builder-model/docs/fable-builder/FBM_EXISTING_DATA_AUDIT_2026-09-26.md)
- **Found the missing learning loop.** Our audit separated the user, Fable's developing self, and their relationship. Memory Formation became a distinct workstream. The local foundation must form a verdict and check proposed words against it. This is designed, not demonstrated. [Audit](https://github.com/NIne-WIngEd/A.L.I.C.E/blob/main/docs/research/PERSONAL_DEVELOPMENT_AUDIT_2026-09-22.md) · [Release design](docs/FIRST_RELEASE.md)
- **Hit a real compute limit.** The N0 two-GPU test passed five stress cases. The sixth exceeded our memory limit. We kept the failure and prepared a higher-memory route; N0 training is not qualified yet. [Run record](https://github.com/NIne-WIngEd/A.L.I.C.E/blob/alice-context/docs/chat-context/2026-09-28/N0_MEASURED_JOINT_P43_576237_FAILURE.md)

### What comes next

- **Current gate:** Fable has no released app, users, or revenue. We need to qualify native foundations, full memory, the learning loop, and a builder that works across people.
- **What YC capital would prove:** Fund focused engineering, measured compute, privacy work, independent tests with consenting people, and prospective-user research. The next experiment must show a repeatable build where an outcome changes later judgment, even when we swap language providers. We will measure quality, speed, cost, and data leaving the device.
- **First release:** Ship the full transferable personal foundation and builder after internal qualifications. External APIs may supply general language and feature skills. Owner-controlled memory and judgment stay local. [Release requirements](docs/FIRST_RELEASE.md)
- **The following years:** Make builds reliable and affordable for more owners. Measure useful decisions over time. Then build our own language and specialist feature models where they meet the quality and cost bar. The five-year goal is a builder that can create more kinds of models for each person.

## Who else is working on this?

Personal AI already exists in several forms. [Replika](https://replika.com/) offers an AI companion. [Personal AI](https://www.personal.ai/your-true-personal-ai) describes a memory stack and a personal language model trained on it. [Ollama](https://ollama.com/) helps people run models locally. We take those products seriously. We cannot say that nobody else gives people AI memory, companionship, local models, or even personally trained models.

Our bet is on making the **builder** a consumer product. Give it authorized raw material. Let it form and test several personal components. Keep them connected as one entity. Let that entity learn from your life, while the models that supply general skills can be replaced. Eventually, let the builder create more of those skills too. The combination is the hypothesis we have to prove with real users and working systems.

## The question behind Fable

Can building your own AI become as simple as installing software? And when it grows with you, can it actually be yours?

That is why we are building Fable Sleight. It is also where our YC application starts.

This repository begins with the product thesis. Code and product evidence will be added as capabilities qualify for consumer transfer.
