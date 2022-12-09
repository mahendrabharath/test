import { FC } from "react";
import { BANNER_MAP } from "../../constants/configs";
import bannerStyles from "./MessageBanner.module.scss";

interface IMessageBannerProps {
  title: string;
  message: string;
  type: keyof typeof BANNER_MAP;
  onCloseBanner: () => void;
}

// error, success, info, warning
export const MessageBanner: FC<IMessageBannerProps> = ({
  title,
  message,
  type = "success",
  onCloseBanner,
}) => {
  const bannerTheme = BANNER_MAP[type];
  return (
    <div>
      <article
        className={bannerStyles.article}
        style={{ "--slist": bannerTheme } as object}
      >
        <h3 className={bannerStyles.heading}>{title}</h3>
        <p className={bannerStyles.message}>{message}</p>
        <span
          onClick={() => onCloseBanner()}
          className={`${bannerStyles.close_button} uil-multiply`}
        ></span>
      </article>
      {/* <article className={bannerStyles.article} style={{ "--slist": "#a6c869,#37a65a" }}>
            <h3 className={bannerStyles.heading}>gingerbread</h3>
            <p className={bannerStyles.message}>Pancake muffin chocolate syrup brownie.</p>
            <span className={`${bannerStyles.close_button} uil-multiply`}></span>
        </article> */}
      {/*<article style="--slist: #90cbb7,#2fb1a9">
            <h3>brownie</h3>
            <p>Cake lemon berry muffin plum macaron.</p>
        </article>
        <article style="--slist: #90cbb7,#2fb1a9">
            <h3>ice cream</h3>
            <p>Wafer apple tart pie muffin gingerbread.</p>
        </article>
        <article style="--slist: #a6c869,#37a65a">
            <h3>lava cake</h3>
            <p>Liquorice plum topping chocolate lemon.</p>
        </article> */}
    </div>
  );
};
