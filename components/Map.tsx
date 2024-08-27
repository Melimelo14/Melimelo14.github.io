"use client";
import { Map, Marker } from "mapkit-react";

export function AppleMap() {
  if (typeof document === "undefined") {
    return null;
  }
  return (
    <Map
      token={
        process.env.NODE_ENV !== "development"
          ? "eyJraWQiOiJaSjhRN04zOFAzIiwidHlwIjoiSldUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiI4U0VQRlNDN1MzIiwiaWF0IjoxNzI0NzY1NDk1LCJvcmlnaW4iOiJtdGMtcGFzc3ktbW9udC1ibGFuYy5jb20ifQ.BnZafyCLLpsxruJ3ObOgeyJtAEh8WcNEyQgNLWSb1eqiUyaAAIscvb4S5CjnTwQz-Zfn6G6KzXD8gefQwYuzVg"
          : "eyJraWQiOiJQRkFaM1c2UjJNIiwidHlwIjoiSldUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiI4U0VQRlNDN1MzIiwiaWF0IjoxNzI0NzY1OTI5LCJleHAiOjE3MjU0MzMxOTl9.zIudfe0GLLQA706c0ZfWOxCWQqvOFIo_zoejV52PAQ6s40cXdnqMBHdChmUOJLUgbjPhsliImBswtqP0C1wIPw"
      }
      colorScheme={0}
      showsCompass={2}
      showsScale={2}
      showsUserLocationControl
      initialRegion={{
        centerLatitude: 45.92486412862045,
        centerLongitude: 6.681416146791913,
        latitudeDelta: 0.02,
        longitudeDelta: 0.04,
      }}
    >
      <Marker latitude={45.92486412862045} longitude={6.681416146791913} />
    </Map>
  );
}
