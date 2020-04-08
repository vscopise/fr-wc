import React, { useEffect } from 'react';
import Image from '@frontity/components/image'
import { connect } from 'frontity';

const FeaturedMedia = ({ state, actions, libraries, id }) => {

    const media = state.source.attachment[id];

    useEffect(() => {
        actions.source.fetch(`/fetch-media/${id}`)
    }, []); 
    

    if (!media) return null;
    //if (!media) return <div>{id}</div>;

    const srcset =
        Object.values(media.media_details.sizes)
            // Get the url and width of each size.
            .map(item => [item.source_url, item.width])
            // Recude them to a string with the format required by `srcset`.
            .reduce(
                (final, current, index, array) =>
                    final.concat(
                        `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
                    ),
                ""
            ) || null;

    return (
        <Image
            srcSet={srcset}
            alt={media.title.rendered}
            src={media.source_url}
        />
    )
}

export default connect(FeaturedMedia);