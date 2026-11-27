type Props = { id: string; title: string; lead?: string };

export default function SectionHeader({ id, title, lead }: Props) {
  return (
    <div className="section-head" data-reveal>
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}
