{\rtf1\ansi\ansicpg949\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // \uc0\u47928 \u49436 \u44032  \u45796  \u47196 \u46300 \u46104 \u47732  \u49892 \u54665 \
document.addEventListener("DOMContentLoaded", function() \{\
  \
  // \uc0\u47784 \u48148 \u51068  \u47700 \u45684  \u53664 \u44544  \u50696 \u49884 \
  const menuBtn = document.getElementById("menu-btn");\
  const nav = document.getElementById("nav");\
\
  if(menuBtn && nav)\{\
    menuBtn.addEventListener("click", function() \{\
      nav.classList.toggle("open");\
    \});\
  \}\
\
  // \uc0\u54756 \u45908  \u49828 \u53356 \u47204  \u54952 \u44284  \u50696 \u49884 \
  const header = document.querySelector("header");\
  if(header)\{\
    window.addEventListener("scroll", function() \{\
      if(window.scrollY > 50)\{\
        header.classList.add("scrolled");\
      \} else \{\
        header.classList.remove("scrolled");\
      \}\
    \});\
  \}\
\
  // \uc0\u50500 \u53076 \u46356 \u50616  \u47700 \u45684  \u50696 \u49884 \
  const accordions = document.querySelectorAll(".accordion");\
  accordions.forEach(acc => \{\
    acc.addEventListener("click", function() \{\
      this.classList.toggle("active");\
      const panel = this.nextElementSibling;\
      if(panel.style.maxHeight)\{\
        panel.style.maxHeight = null;\
      \} else \{\
        panel.style.maxHeight = panel.scrollHeight + "px";\
      \}\
    \});\
  \});\
\
\});}