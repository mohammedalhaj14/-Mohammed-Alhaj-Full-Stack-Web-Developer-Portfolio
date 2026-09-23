import { coreStack } from '../data/projects'

export default function CoreStack() {
  return (
    <div className="core-stack">
      <div className="container core-stack-inner">
        {coreStack.map((tech) => (
          <span className="core-stack-item" key={tech}>
            <span className="core-stack-dot" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
