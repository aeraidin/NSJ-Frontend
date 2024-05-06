/** @format */
"use client";
import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import { Add, Gps, Location } from "iconsax-react";
import { motion } from "framer-motion";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import useClickOutside from "@/util/hook/useClickOutside";

interface mapProps<T extends FieldValues> {
  latlng: (value: any) => void;
  register?: UseFormRegister<T>;
  error?: string | undefined;
  id: Path<T>;
  selectedValue?: any;
}

const Map = <T extends FieldValues>({
  latlng,
  error,
  selectedValue,
}: mapProps<T>) => {
  const [selected, setSelected] = useState();

  // const [position, setPosition] = useState<LatLngExpression | undefined>(
  //   coordinatesArray.length === 2
  //     ? [coordinatesArray[0], coordinatesArray[1]]
  //     : undefined
  // );

  const [position, setPosition] = useState<LatLngExpression | undefined>();
  const [currentPosition, setCurrentPosition] = useState<
    LatLngExpression | undefined
  >();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const mapRef = useRef<any>(null);

  const containerRef = useClickOutside(() => setIsOpen(false));

  const handleMarkerMove = (event: any) => {
    setPosition(event.target._latlng);
    latlng(event.target._latlng);
  };

  const MapEventsHandler = () => {
    const map = useMapEvents({
      zoom: () => {
        const center = map.getCenter();
        setPosition([center.lat, center.lng]);
      },

      move: () => {
        const center = map.getCenter();
        setPosition([center.lat, center.lng]);
      },
    });
    return null;
  };

  if (typeof window !== "undefined") {
    setTimeout(function () {
      window.dispatchEvent(new Event("resize"));
    }, 500);
  }
  let myIcon = L.icon({
    iconUrl: "/icons/LocationMarker.svg",
    iconSize: [52, 52],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  let currentIcon = L.icon({
    iconUrl: "/icons/GpsMarker.svg",
    iconSize: [24, 24],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });
  const [mapInitialized, setMapInitialized] = useState(false);

  useEffect(() => {
    const getCurrentPosition = async () => {
      try {
        const { coords } = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          }
        );

        setPosition([coords.latitude, coords.longitude]);
        setCurrentPosition([coords.latitude, coords.longitude]);

        if (selectedValue) {
          const coordinatesArray = selectedValue.split(",");
          setPosition({ lat: coordinatesArray[0], lng: coordinatesArray[1] });
        }
      } catch (error) {
        console.error("Error getting current position:", error);
      }
    };
    getCurrentPosition();
  }, [selectedValue]);

  // useEffect(() => {
  //   if (position) {
  //     latlng(position);
  //   }
  // }, [position, latlng]);

  const submitPosition = () => {
    if (position) {
      latlng(position);
    }
    setIsOpen(false);
  };

  const currentPositionHandler = () => {
    setPosition(currentPosition);
    if (currentPosition && mapRef.current) {
      mapRef.current.setView(currentPosition, mapRef.current.getZoom());
    }
  };

  console.log(position);

  return (
    <>
      {/* <div
        onClick={() => setIsOpen(false)}
        className={` ${
          isOpen ? " flex  " : "hidden"
        }  bg-black/40 w-full min-h-screen cursor-pointer  right-0  fixed
           z-30 top-0 bottom-0 `}
      ></div> */}
      {/* {isOpen ? (
      ) : null} */}

      {position && (
        <div className="w-full h-full select-none  ">
          <motion.div
            layoutId={"1"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={` ${
              isOpen
                ? "fixed h-full bg-black/40 pt-40 px-0 sm:px-20 sm:top-0  left-0 right-0 bottom-0  lg:pt-0 lg:px-20 lg:py-20      z-30"
                : "relative h-[242px] select-none"
            }`}
          >
            {isOpen ? (
              <div
                onClick={() => setIsOpen(false)}
                className="cursor-pointer  w-fit text-2xl z-30 px-2 py-2 text-white"
              >
                <Add size={32} className=" rotate-45" />
              </div>
            ) : null}
            {position && (
              <MapContainer
                whenReady={() => setMapInitialized(true)}
                ref={mapRef}
                className={`blur-none  `}
                center={position}
                zoom={33}
                style={{ height: `100%`, width: "100%" }}
                scrollWheelZoom={true}
              >
                <MapEventsHandler />
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> '
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <Marker
                  draggable={false}
                  position={position}
                  icon={myIcon}
                  eventHandlers={{
                    dragend: handleMarkerMove,
                  }}
                />
                {currentPosition && (
                  <Marker
                    position={currentPosition}
                    icon={L.icon({
                      iconUrl: "/icons/GpsMarker.svg",
                      iconSize: [24, 24],
                      iconAnchor: [12, 24],
                    })}
                  />
                )}
              </MapContainer>
            )}
            <div
              onClick={() => submitPosition()}
              className={`absolute ${
                isOpen ? "block" : "hidden"
              } border p-3 rounded-lg select-none cursor-pointer backdrop-blur-sm bg-primary-600 hover:bg-primary-600/70 duration-200 border-white bottom-32 left-1/2 transform -translate-x-1/2 translate-y-1/2`}
            >
              <div className=" flex gap-2 w-full px-10  lg:px-20   ">
                <p className=" text-white ">تایید</p>
              </div>
            </div>

            <div
              onClick={() => currentPositionHandler()}
              className={`fixed ${
                isOpen ? "block" : "hidden"
              } border p-2 rounded-full select-none cursor-pointer backdrop-blur-sm  bg-primary-600 hover:bg-primary-600/70 duration-200 border-white  bottom-32 right-0 lg:bottom-32 lg:right-24 transform -translate-x-1/2 translate-y-1/2`}
            >
              <div className=" flex gap-2 w-full    ">
                <Gps size="24" color="#fff" />
              </div>
            </div>

            <div
              onClick={() => setIsOpen(true)}
              className={` w-full ${
                isOpen ? "hidden" : "block"
              } h-full bg-black/20 backdrop-blur-[1px] absolute z-0 bottom-0 cursor-pointer`}
            >
              <div
                className={`absolute ${
                  isOpen ? "hidden" : "block"
                }  p-3 px-6 rounded-[10px] select-none z-40 cursor-pointer backdrop-blur-sm  bg-white shadow-CMSHADOW  duration-200  top-20 left-1/2 transform -translate-x-1/2 translate-y-1/2`}
                onClick={() => setIsOpen(true)}
              >
                <p className=" text-primary-600 text-sm"> نمایش روی نقشه</p>
              </div>
            </div>
            <div
              className={`${
                error
                  ? "text-xs text-error-500 mt-1 h-[14px]"
                  : "border-gray-100 focus:border-gray-600 hover:border-gray-300 dark:border-white/10 dark:hover:border-white/25 dark:focus:border-white/45 "
              } `}
            >
              {error}
            </div>
          </motion.div>
        </div>
      )}

      {!position ? <div>...</div> : null}
    </>
  );
};

export default Map;
