export type Locale = 'cn' | 'en'

type LocalizedProject = {
  title: string
  subtitle?: string
  description?: string
  bullets?: string[]
}

export type Project = {
  slug: string
  image: string
  link: string
  cn: LocalizedProject
  en?: LocalizedProject
}

export const projects: Project[] = [
  {
    slug: 'context-lens',
    image: 'https://cdn.jsdelivr.net/gh/fvjowe/imagebed@main/img/20260901194923346.png',
    link: 'https://github.com/spdc-elm/context-len',
    cn: {
      title: 'Context Lens',
      description: 'See what your model sees. 看见真正进入模型上下文的一切，从系统提示词、可调用的工具，到 skills、memory，以及每一条最终决定模型如何理解和回应的隐藏上下文。\n\nContext Lens 让模型眼中的世界清晰可见。',
      bullets: [],
    },
  },
  {
    slug: 'macs-fan-control',
    image: 'https://cdn.jsdelivr.net/gh/fvjowe/imagebed@main/img/20260901192830168.png',
    link: 'https://github.com/spdc-elm/open-macs-fan-control',
    cn: {
      title: 'Open Macs Fan Control',
      subtitle: 'Open-source macOS fan scheduling and thermal control',
      bullets: [
        'Provides configurable temperature-to-fan-speed curves for Apple Silicon Macs',
        'Combines IOHID and SMC telemetry with aggregate CPU, GPU, and memory sensors',
        'Separates the controller, privileged low-level writer daemon, CLI, and menu bar client',
      ],
    },
  },
  {
    slug: 'galaxy-xai-isef-2023',
    image: 'https://firebasestorage.googleapis.com/v0/b/project-leo-mvp.appspot.com/o/attachments%2Fac95b2bd-ce90-475d-8804-ba1fbf6d00a2%2F0232f60c781?alt=media&token=3315dc92-e0ff-452b-9d46-efbd0e70a2dd',
    link: 'https://isef.net/project/phys020-deriving-features-of-galaxy-with-xai-approach',
    cn: {
      title: 'Deriving Features of Galaxy with Explainable AI (XAI) Approach',
      subtitle: 'ISEF 2023 Finalist – Physics and Astronomy Category',
      bullets: [
        'Designed a novel workflow combining XAI techniques to improve reliability of a CNN network',
        'Independently trained models, ran experiments, analyzed results, and authored the paper',
        'Presented technical findings in fluent English to international judges (PhD-level scientists)',
        'Visualized statistical outcomes and produced the project board',
      ],
    },
  },
]
