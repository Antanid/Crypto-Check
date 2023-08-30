import style from './style/style.module.scss'

const FavotiteFirstLine = () => {
  return (
    <div className={style.coins_heading}>
    <p>Rank</p>
    <p className={style.coin_name}>Coin</p>
    <p>Price</p>
    <p className={style.hide_mobile}>Volume</p>
  </div>
  )
}

export default FavotiteFirstLine