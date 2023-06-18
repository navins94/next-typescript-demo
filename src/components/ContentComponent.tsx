import React from 'react';

interface TextColumnProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

const TextColumn: React.FC<TextColumnProps> = ({
  title,
  description,
  icon,
  className,
}) => (
  <div className={`text-column ${className}`}>
    <h2 className="text-column__title text-2xl font-bold uppercase">{title}</h2>
    <p className="text-column__description mt-2 text-lg opacity-70">
      {description}
    </p>
    {icon && (
      <div className="mt-8">
        <img
          src={icon}
          alt="Icon"
          height={24}
          width={24}
          className="text-column__icon"
        />
      </div>
    )}
  </div>
);

interface MediaColumnProps {
  title: string;
  description: string;
  image?: string;
  icon?: string;
  className?: string;
}

const MediaColumn: React.FC<MediaColumnProps> = ({
  title,
  description,
  image,
  icon,
  className,
}) => (
  <div className={`media-column ${className}`}>
    {image && <img src={image} alt="Image" className="media-column__image" />}
    <h2 className="text-column__title mt-8 text-2xl font-bold uppercase">
      {title}
    </h2>
    <p className="text-column__description mt-2 text-lg opacity-70">
      {description}
    </p>
    {icon && (
      <div className="mt-8">
        <img
          src={icon}
          alt="Icon"
          height={24}
          width={24}
          className="text-column__icon"
        />
      </div>
    )}
  </div>
);

interface ImageProps {
  image?: string;
  className?: string;
}

const ImageColumn: React.FC<ImageProps> = ({ image, className }) => (
  <div className={`image ${className}`}>
    {image && <img src={image} alt="Image" className="image__content" />}
  </div>
);

interface ContentComponentProps {
  type: string;
  [key: string]: any;
}

const ContentComponent: React.FC<ContentComponentProps> = ({
  type,
  ...props
}) => {
  switch (type) {
    case 'textColumn':
      return <TextColumn {...(props as TextColumnProps)} />;
    case 'mediaColumn':
      return <MediaColumn {...(props as MediaColumnProps)} />;
    case 'imageColumn':
      return <ImageColumn {...(props as ImageProps)} />;
    default:
      return null;
  }
};

export default ContentComponent;
