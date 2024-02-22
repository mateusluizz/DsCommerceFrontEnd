import './styles.css';

type Props = {
  name: string;
};

function ButtonNextPage({ name }: Props) {
  return <div className="dsc-btn-next-page">{name}</div>;
}

export default ButtonNextPage;
