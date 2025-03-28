"use client";

import React from 'react';
export const RandomCircles = () => (
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-800 opacity-70"></div>
    <div className="absolute w-96 h-96 blur-sm rounded-full dark:bg-slate-900/20 bg-slate-300/20 top-1/4 -left-20"></div>
    <div className="absolute w-64 h-64 blur-sm rounded-full dark:bg-slate-900/30 bg-blue-200/20 bottom-20 right-10"></div>
    <div className="absolute w-32 h-32 blur-sm rounded-full dark:bg-slate-900/40 bg-indigo-200/30 top-40 right-1/4"></div>
  </div>
);

export default RandomCircles;
