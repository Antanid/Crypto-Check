import style from "./style/style.module.scss";

type PropsTableInfo = {
    checkMarketData: any;
    marketDataCurrynce1H: number;
    marketDataCurrynce24h: number;
    marketDataCurrynce7d: number;
    marketDataCurrynce14d: number;
    marketDataCurrynce30d: number;
    marketDataCurrynce1y: number;
}

const SingleTableInfo: React.FC <PropsTableInfo> = ({checkMarketData, marketDataCurrynce1H,marketDataCurrynce24h, marketDataCurrynce7d, marketDataCurrynce14d, marketDataCurrynce30d, marketDataCurrynce1y}) => {
  return (
    <div className={style.content}>
            <table>
              <thead>
                <tr>
                  <th>1h</th>
                  <th>24h</th>
                  <th>7d</th>
                  <th>14d</th>
                  <th>30d</th>
                  <th>1yr</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {checkMarketData?.price_change_percentage_1h_in_currency ? (
                      <p>
                        {marketDataCurrynce1H.toFixed(1)}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td>
                    {checkMarketData?.price_change_percentage_24h_in_currency ? (
                      <p>
                        {marketDataCurrynce24h.toFixed(1)}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td>
                    {checkMarketData?.price_change_percentage_24h_in_currency ? (
                      <p>
                        {marketDataCurrynce7d.toFixed(1)}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td>
                    {checkMarketData?.price_change_percentage_24h_in_currency ? (
                      <p>
                        {marketDataCurrynce14d.toFixed(1)}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td>
                    { checkMarketData?.price_change_percentage_24h_in_currency ? (
                      <p>
                        {marketDataCurrynce30d.toFixed(1)}
                        %
                      </p>
                    ) : null}
                  </td>
                  <td>
                    { checkMarketData?.price_change_percentage_24h_in_currency ? (
                      <p>
                        {marketDataCurrynce1y.toFixed(1)}
                        %
                      </p>
                    ) : null}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  )
}

export default SingleTableInfo