import { GalleryContainer } from "./Container/index";

import { useNowPlayingContext } from "contexts/NowPlayingContext";
import { NowPlayingHOC } from "../../HOC/NowPlayingHOC";

function Gallery() {
  const { data } = useNowPlayingContext();

  return <GalleryContainer data={data} title="Mais populares" />;
}

export const GalleryWithNowPlaying = () => NowPlayingHOC(Gallery);
