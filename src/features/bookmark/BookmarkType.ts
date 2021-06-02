type imgType = string;

export type BookmarkPropsType = {
  isBookmark: boolean;
  img: {
    bookmark: imgType;
    unBookmark: imgType;
  };
  onClick: () => void;
};
