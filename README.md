<p align="center">
  <img src="assets/fable-overview.svg" alt="Fable Sleight: your chosen data goes into the Fable Builder to create a continuing personal AI" width="100%">
</p>

<p align="center">
  <a href="#why-you-need-a-personal-ai">Why you need it</a> ·
  <a href="#the-idea-behind-fable">The idea</a> ·
  <a href="#the-personal-foundation-fable-should-build-first">The models</a> ·
  <a href="#the-roadmap">Roadmap</a> ·
  <a href="#who-else-is-working-on-this">Comparison</a>
</p>

---

You wanna build a personal frontier model. But you don't wanna go through years of research and manual labor. You just wanna download an `.exe` file like a software and let it build automatically. **Fable is for you.**

No, Fable is not a local open weight model that you download and personalize. Because Fable gives you a **personal model, not a personalized model**. It comes with infrastructure that can build models. **Fable itself is not a model.**

> [!NOTE]
> **Where we actually are — September 2026:** Fable is not a downloadable consumer app yet. A.L.I.C.E. has working research foundations in evidence, memory, conversation, information access, and cognitive state. The Fable Builder Model is an active research workstream. We have not demonstrated a complete automatic consumer build, an end-to-end learned judgment loop, or user-owned frontier feature models.

## Why you need a personal AI?

Everyone deserves their own AI. Right now, many of us have AI agents for different tasks. They can be useful, but most start with a general model and see only the part of our life we put into that task. We as humans are different. We think differently. We should not have to be treated like the same person with a different set of files.

Even local models you can download and personalize usually come pretrained with someone else's weights. You can give them your files and teach them your preferences, but you are still working on top of a model built for everyone. The model grows with its manufacturing company, not with you.

### One life. Too many versions.

Your teacher sees the student. Your mother sees her child. Your friends see who you are with them. Your coding agent sees the project. Each knows a real version of you. None sees the whole picture.

When their advice conflicts, only you know what ties it together: the pressure, the money, what you want, and what happened last time. Fable is meant to be the companion that learns that context with you. It remembers why you made a choice and can see a blind spot you missed. You don't have to start from the beginning every time.

## The idea behind Fable

You cannot ask everyone to build their personal AI from scratch. Most people do not know how to train a model. Even if they do, choosing the architecture, preparing data, checking whether it learned the right thing, and keeping it updated takes years of research and manual labor.

So why don't we automate that process? Give Fable access to the raw data you choose. Let the builder create the personal pieces, link them into one entity, and keep improving them as it learns more about you. You should not need to code to get started.

The experience we want is simple. Download the software. Pick the folders and accounts you want it to learn from. Review what you are granting access to. Then let the builder do the work.

Behind that simple setup is the hard part:

1. **Understand the raw material.** Fable's builder reads authorized data, tracks where each piece came from, and separates things that happened from things it has inferred. When it does not know, it should say so. Synthetic examples can help train or test behavior; they cannot become fake memories.
2. **Build your personal foundation.** It forms the components that remember, understand you, develop a character, and learn from experience. The builder then connects them to one entity rather than handing you several disconnected bots.
3. **Give it useful abilities.** Fable can route a task to a coding, research, reasoning, or other capability model. Early versions may use an existing model or a service you explicitly choose. The feature engine and the personal system have different jobs.
4. **Let it grow with you.** When you correct Fable or a decision has a real outcome, the system should learn from it. A proposed update must be tested, versioned, and reversible. If it needs a new specialist, the builder should eventually be able to create one.

The amount of data does not determine whether you are allowed to begin. With little data, your Fable would begin with more unknowns and ask or learn over time. It cannot honestly claim to know a person from a nearly empty folder. And the `.exe` is a product goal: a consumer laptop cannot simply pretrain a GPT-scale model from someone's files.

### The personal foundation Fable should build first

A.L.I.C.E.'s architecture names five personal capabilities. Its [Memory Formation Model plan](https://github.com/NIne-WIngEd/A.L.I.C.E/blob/research/mfm-foundation-20260923/docs/MEMORY_FORMATION_MODEL_FOUNDATION.md) says the Fable Builder Model (FBM) should construct and connect their Fable equivalents from your authorized data, with synthetic examples to teach and test what your data alone cannot cover. These are **five roles in the architecture**, not five finished models you can download today. Some need learned weights; others are evidence-linked state that grows over time.

| Personal capability | What it learns or keeps |
| --- | --- |
| **Personality / identity model** | A starting character and way of judging, grounded in what your data supports. Synthetic examples can help teach behavior without pretending they are your memories. |
| **Memory Formation Model (MFM)** | What a new experience might mean: a preference, event, correction, contradiction, or something still uncertain. It proposes memories; a separate system decides what becomes accepted. |
| **User / host model** | Your goals, habits, constraints, preferences, and how they change, with the evidence behind them. |
| **Relationship model** | The history and ways of working that you and your Fable actually develop together. |
| **Fable self / continuity model** | Your Fable's own decisions, lessons, and development after it begins. It is separate from your history. |

At installation, FBM should form what your data can support and leave the rest open. It cannot invent a shared past or claim your Fable has already lived experiences it has not had. The **Experience Ledger** and evidence store support these capabilities; they are records and infrastructure, not two more trained models. FBM is the builder, not your Fable's personality.

There is **no fixed total of future models** in the [A.L.I.C.E. architecture](https://github.com/NIne-WIngEd/A.L.I.C.E/blob/main/docs/MEMORY_IDENTITY_FORMATION_AND_HOST_LEARNING_ARCHITECTURE.md). It names possible specialists such as episode formation, retrieval planning, context fusion, temporal and conflict interpretation, importance and consolidation, and world modeling. Which become separate models should depend on what Fable can build, test, and run usefully for you.

## What can we build now? What comes later?

Right now, the work closest to building from a person's own data is the personal foundation: evidence and memory, the Experience Ledger, and the models that learn about the user and the entity. Even there, we are still researching how to form them automatically and connect them to decisions. A.L.I.C.E. is our first development case, not a consumer installation.

Coding, simulation, advanced research, and broad reasoning need knowledge and compute that a person's private files alone cannot supply. Early Fables may use OpenAI, Anthropic, other APIs, or local open models for those jobs. **If a task uses an API, that part of the task is not local.** The person should choose whether to enable it and see what data would leave their device.

Then we want to build Fable's own strong feature models. After that comes the harder goal: shipping the infrastructure that can build and improve more of those feature models too. That is how Fable moves from building the personal foundation to becoming a general model factory for its user. We have not solved automatic frontier-model training on consumer hardware. We will test the compute, cost, and data limits before promising it as a feature.

## What does it mean to own your Fable?

You should be able to see what it learned and where a belief came from. You should be able to correct it, revoke a source, delete data and its downstream influence, roll back a bad update, and take your personal state with you. If a general reasoning provider changes, your entire relationship with your Fable should not reset.

We intend to build and keep that personal state locally by default, with separate keys and storage for each person. The software will still need to earn a privacy claim through permissions, encryption, verified deletion, and honest handling of optional cloud services. Those protections have not been certified in a released Fable app.

Owning your personal intelligence does not mean claiming that you own OpenAI's or another provider's base weights because an API answered a question. We need to be exact about what is yours: your evidence, records, learned personal components, and future models that are actually built for you.

## The roadmap

Here is the order we are working toward. The later stages depend on proving the earlier ones; these are milestones rather than promised launch dates.

| Stage | What we are doing | What would show it works |
| --- | --- | --- |
| **Research now** | Build A.L.I.C.E.'s transferable cognitive foundations. Capture the construction process in FBM. Test N0's semantic and relational foundations. | Exact-version tests and experiments, including the failures. |
| **Build one personal foundation** | Connect memory formation, host and self models, relationships, goals, judgment, and real outcomes. | A relevant change in learned state changes a relevant decision. An irrelevant change does not. |
| **Consumer alpha** | Put the builder into a desktop installer. Let early users grant data access and inspect the Fable it forms. | Different users stay isolated. Corrections, export, deletion, restore, and rollback work. |
| **Stronger abilities** | Add work tools and specialist engines. Build and evaluate our own feature models where we have an advantage. | Better results on real tasks with measured cost and clear model ownership. |
| **Broader model factory** | Let the infrastructure construct and update more specialist models for each person. | Useful gains survive testing, model replacement, hardware limits, and rollback. |

A.L.I.C.E. is the research system where transferable capabilities are developed and tested first. Fable is the consumer product that must make them work for someone else, without carrying over A.L.I.C.E.'s private identity. Some upstream records still use the old internal name Friday.

We are in the first stage. A consumer alpha follows only after the personal foundation and isolation work qualify. Building frontier feature models and automating their construction are longer-term research goals. We do not have a defensible release date for them yet.

## Who else is working on this?

Personal AI already exists in several forms. [Replika](https://replika.com/) offers an AI companion. [Personal AI](https://www.personal.ai/your-true-personal-ai) describes a memory stack and a personal language model trained on it. [Ollama](https://ollama.com/) helps people run models locally. We take those products seriously. We cannot say that nobody else gives people AI memory, companionship, local models, or even personally trained models.

Our bet is on making the **builder** a consumer product. Give it authorized raw material. Let it form and test several personal components. Keep them connected as one entity. Let that entity learn from your life, while the models that supply general skills can be replaced. Eventually, let the builder create more of those skills too. The combination is the hypothesis we have to prove with real users and working systems.

## The question behind Fable

Can building your own AI become as simple as installing software? And when it grows with you, can it actually be yours?

That is why we are building Fable Sleight. It is also where our YC application starts.

This repository begins with the product thesis. Code and product evidence will be added as capabilities qualify for consumer transfer.
