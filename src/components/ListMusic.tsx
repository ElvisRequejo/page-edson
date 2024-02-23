"use client";

import music from "@/data/music.json";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function ListMusic({ i18n }: { i18n: any }) {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mt-4">
        {music.map(({ urlImage, urlSong }) => {
          return (
            <div key={urlSong}>
              <a href={urlSong} target="_blank" rel="noreferrer">
                <img src={urlImage} alt="jpg" className="w-full rounded-lg" />
                <div className="w-full text-center">{i18n.MUSIC_ITEM}</div>
              </a>
            </div>
          );
        })}
      </div>
      <PaginationSection />
    </section>
  );
}

function PaginationSection() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className="cursor-pointer" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="cursor-pointer">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="cursor-pointer" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="cursor-pointer">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext className="cursor-pointer" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
