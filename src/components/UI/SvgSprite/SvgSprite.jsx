import sprite from '../../../images/sprite.svg';

const SvgSprite = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default SvgSprite;
