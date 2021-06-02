import React from 'react';

import { BookmarkPropsType } from './BookmarkType';

import * as S from './style';

const Bookmark = ({ isBookmark, img, onClick }: BookmarkPropsType) => {
  const { bookmark: bookmarkImg, unBookmark: unBookmarkImg } = img;
  const curShowImg = isBookmark ? bookmarkImg : unBookmarkImg;

  return <S.Container onClick={onClick} src={curShowImg} />;
};

export default Bookmark;
