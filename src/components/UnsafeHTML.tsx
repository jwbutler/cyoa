type Props = {
  children: string
};

const UnsafeHTML = ({ children }: Props) => (
  <span dangerouslySetInnerHTML={{ __html: children }} />
);

export default UnsafeHTML;
