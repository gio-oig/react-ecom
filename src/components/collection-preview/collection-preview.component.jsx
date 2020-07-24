import React from 'react';
import ControllerItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((el, idx) => idx < 4)
        .map(({ id, ...otherCollectionProps }) => (
          <ControllerItem key={id} {...otherCollectionProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
