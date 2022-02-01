import React from "react";
// import Artis from "../Artist/Artist";
import Song from "../Songs/Songs";
import ArtisInfo from "../ArtistInfo/ArtistInfo";
import { Pitinfo, Pit } from "../Data/All_Data";
import {
  Jeniferinfo,
  Jenifer,
  Radfooinfo,
  Radfoo,
  Marron,
  Marooninfo,
  Alexandrainfo,
  Alexandra,
  Akcent,
  Akcentinfo,
  Daddy,
  Daddyinfo,
  Kishor,
  Kishorinfo,
  Charlie,
  Charlieinfo,
  Brunoinfo,
  Bruno,
  Taylor,
  Jubininfo,
  Taylorinfo,
  Jubin,
} from "../Data/All_Data";

export default function Pitbull() {
  return (
    <>
      <ArtisInfo INFO={Pitinfo} />
      <Song Name={Pit} />
    </>
  );
}

export let JeniferL = () => {
  return (
    <>
      <ArtisInfo INFO={Jeniferinfo} />
      <Song Name={Jenifer} />
    </>
  );
};

export function RadfooS() {
  return (
    <>
      <ArtisInfo INFO={Radfooinfo} />
      <Song Name={Radfoo} />
    </>
  );
}

export function MaroonS() {
  return (
    <>
      <ArtisInfo INFO={Marooninfo} />
      <Song Name={Marron} />
    </>
  );
}

export function AlexandraS() {
  return (
    <>
      <ArtisInfo INFO={Alexandrainfo} />
      <Song Name={Alexandra} />
    </>
  );
}

export function AkcentS() {
  return (
    <>
      <ArtisInfo INFO={Akcentinfo} />
      <Song Name={Akcent} />
    </>
  );
}

export function DaddyYS() {
  return (
    <>
      <ArtisInfo INFO={Daddyinfo} />
      <Song Name={Daddy} />
    </>
  );
}

export function KishorS() {
  return (
    <>
      <ArtisInfo INFO={Kishorinfo} />
      <Song Name={Kishor} />
    </>
  );
}
export function CharliS() {
  return (
    <>
      <ArtisInfo INFO={Charlieinfo} />
      <Song Name={Charlie} />
    </>
  );
}

export function BrunoS() {
  return (
    <>
      <ArtisInfo INFO={Brunoinfo} />
      <Song Name={Bruno} />
    </>
  );
}
export function TaylorS() {
  return (
    <>
      <ArtisInfo INFO={Taylorinfo} />
      <Song Name={Taylor} />
    </>
  );
}
export function JubinS() {
  return (
    <>
      <ArtisInfo INFO={Jubininfo} />
      <Song Name={Jubin} />
    </>
  );
}
