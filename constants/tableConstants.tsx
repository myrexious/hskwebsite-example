const HSKT_Tabledata: tableInterface = {
  titles: ["Type", "No. of Machines", "Production Output (Day)", "Production Output (Mo)"],
  data: [
    ["Compound (Main Floor)", "3 Lines", "", "500 tons/month"],
    ["IM EVA (Main Floor)", "6 Lines", "19.500 prs/day", "450.000 prs/mo"],
    ["IM EVA (Development)", "4 Lines", "", ""],
    ["Compression EVA", "6 Lines", "16.500 prs/day", "400.000 prs/mo"],
    ["CMP Blocker", "1 Lines", "4.500 prs/day", "	100.000 prs/mo"],
    ["Rotary Cold Shot", "2 Lines", "6.500 prs/day", "140.000 prs/mo"],
    ["Direct Molded Press (DMP)	", "1 Lines", "2,000 prs/day", "50.000 prs/mo"],
  ]
}

const HSKJ_Tabledata: tableInterface = {
  titles: ["Type", "No. of Machines", "Production Output (Day)", "Production Output (Mo)"],
  data: [
    ["Compound (Main Floor)", "3 Lines", "", "500 tons/month"],
    ["IM EVA (Main Floor)", "34 Lines", "110.000 prs/day", "2.700.000 prs/mo"],
    ["Compression EVA", "16 Lines", "18.500 prs/day", "450.000 prs/mo"],
    ["CMP Blocker", "3 Lines", "13.500 prs/day", "	300.000 prs/mo"],
    ["Painting", "5 Lines", "12.500 prs/day", "	300.000 prs/mo"],
  ]
}

const HSK_Total_Tabledata: tableInterface = {
  titles: ["Product", "Tangerang", "Jepara", "Rembang", "Total Output per Month"],
  data: [
    ["Compound", "300.000 kg", "300.000 kg", "500.000 kg", "1.100.000 kg"],
    ["Injection EVA","450.000 prs", "2.700.000 prs", "3.000.000 kg", "6.150.000 prs"],
    ["Compression EVA", "150.000 prs", "450.000 prs", "530.000 kg", "1.130.000 prs"],
    ["CMP Blocker", "100.000 prs", "300.000 prs", "200.000 kg", "600.000 prs"],
    ["Coldshot-DMP", "150.000 prs", "", "150.000 prs", "300.000 prs"],
    ["Painting", "", "300.000 prs", "", "300.000 prs"],
  ]
}

export { 
  HSKT_Tabledata,
  HSKJ_Tabledata,
  HSK_Total_Tabledata
}