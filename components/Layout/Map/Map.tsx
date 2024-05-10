/** @format */
"use client";
import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import { Add, Gps, Location } from "iconsax-react";
import { motion } from "framer-motion";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";
import useClickOutside from "@/util/hook/useClickOutside";
import "../../../components/Layout/Map/Map.css";
interface mapProps<T extends FieldValues> {
  latlng: (value: any) => void;
  register?: UseFormRegister<T>;
  error?: string | undefined;
  id: Path<T>;
  selectedValue: string | undefined; // Ensure selectedValue is of type string
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

  const [position, setPosition] = useState<any>({
    lat: 0,
    lng: 0,
  });
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

  useEffect(() => {
    if (selectedValue) {
      const [lat, lng] = selectedValue.split(",").map(parseFloat);
      setPosition({ lat, lng });
    }
  }, [selectedValue]);


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
    iconUrl: "/Icons/LocationMarker.svg",
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

  // useEffect(() => {
  //   const getCurrentPosition = async () => {
  //     try {
  //       const { coords } = await new Promise<GeolocationPosition>(
  //         (resolve, reject) => {
  //           navigator.geolocation.getCurrentPosition(resolve, reject);
  //         }
  //       );

  //       setPosition([coords.latitude, coords.longitude]);
  //       setCurrentPosition([coords.latitude, coords.longitude]);

  //       if (selectedValue) {
  //         const coordinatesArray = selectedValue.split(",");
  //         setPosition({ lat: coordinatesArray[0], lng: coordinatesArray[1] });
  //       }
  //     } catch (error) {
  //       console.error("Error getting current position:", error);
  //     }
  //   };
  //   getCurrentPosition();
  // }, [selectedValue]);

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



  // const currentPositionHandler = () => {
  //   setPosition(currentPosition);
  //   if (currentPosition && mapRef.current) {
  //     mapRef.current.setView(currentPosition, mapRef.current.getZoom());
  //   }
  // };

  return (
    <>
      <div className="w-full h-full select-none  rounded-[10px]  ">
        <div
          className={` 
          relative
           h-[200px] md:h-[296px] rounded-lg w-full select-none 
          `}
        >
          {selectedValue && position.lat !== 0 ? (
            <MapContainer
              whenReady={() => setMapInitialized(true)}
              ref={mapRef}
              className={`blur-none relative rounded-3xl`}
              center={position}
              zoom={55}
              style={{ height: `100%`, width: "100%" }}
              scrollWheelZoom={true}
            >
              {/* <MapEventsHandler /> */}
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
              {/* <Marker
              draggable={false}
              position={[51.505, -0.09]}
              icon={L.icon({
                iconUrl: "/icons/GpsMarker.svg",
                iconSize: [24, 24],
                iconAnchor: [12, 24],
              })} */}
              {/* /> */}
            </MapContainer>
          ) : null}
          <div className=" absolute top-0 left-0 right-0 bottom-0 select-none"></div>
          <div
            className={`absolute block  p-3 px-6 rounded-[10px] select-none z-40 cursor-pointer backdrop-blur-sm bg-white/30 shadow-CMSHADOW  duration-200  top-10 lg:top-24 left-1/2 transform -translate-x-1/2 translate-y-1/2`}
            onClick={() => console.log("click map")}
          >
            <p className=" text-primary-600 text-sm"> نمایش روی نقشه</p>
          </div>
          <div
            className={`${error
              ? "text-xs text-error-500 mt-1 h-[14px]"
              : "border-gray-100 focus:border-gray-600 hover:border-gray-300 dark:border-white/10 dark:hover:border-white/25 dark:focus:border-white/45 "
              } `}
          >
            {error}
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
