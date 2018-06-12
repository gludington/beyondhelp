import MapAreaInfo from "../MapAreaInfo";
import MapInfo from "../MapInfo";
import MapLinksInfo from "../MapLinksInfo";
import MapRefs from "../MapRefs";
import MapToMapAreaInfo from "../MapToMapAreaInfo";

const maps = [
    new MapInfo("RedLarch", "the-dessarin-valley", "02-02.jpg", "e29f8904-2e95-4794-b7a3-e70ef71ce0b2", [
        new MapAreaInfo("1AllfaithsShrine", "339,244,364,269"),
        new MapAreaInfo("2TheSwingingSword", "311,193,336,218"),
        new MapAreaInfo("3TheHelmatHighsun", "533,148,558,173"),
        new MapAreaInfo("4MotherYalanthas", "527,233,552,258"),
        new MapAreaInfo("5ThelornsSafeJourneys", "468,160,493,185"),
        new MapAreaInfo("6ChansyrlFineHarness", "269,161,294,186"),
        new MapAreaInfo("7HelvurTarnlarClothier", "483,239,508,264"),
        new MapAreaInfo("8LorrensBakery", "321,134,346,159"),
        new MapAreaInfo("9TanturSmithy", "632,231,657,256"),
        new MapAreaInfo("10DrouthFinePoultry", "317,304,342,329"),
        new MapAreaInfo("11JalessaOrnraButcher", "355,337,380,362"),
        new MapAreaInfo("12DornenFinestone", "360,388,385,413"),
        new MapAreaInfo("13IronheadArms", "474,389,499,414"),
        new MapAreaInfo("14MhandyvversPoultry", "352,439,377,464"),
        new MapAreaInfo("15Haeleeyas", "355,113,380,138"),
        new MapAreaInfo("16WaelvursWagonworks", "501,336,526,361"),
        new MapAreaInfo("17Gaelkurs", "570,159,595,184"),
        new MapAreaInfo("18MellikhoStoneworks", "353,33,378,58"),
        new MapAreaInfo("19LuruthsTannery", "368,470,393,495"),
        new MapAreaInfo("20BethendursStorage", "482,452,507,477"),
        new MapAreaInfo("21TheMarket", "609,475,634,500"),
        new MapAreaInfo("22VallivoesSundries", "524,511,549,536"),
        new MapToMapAreaInfo("06-03.jpg", "342,46,7"),
        new MapToMapAreaInfo("06-03.jpg", "537,347,7")
    ], ["#ImportantRedLarchers", "#TheBelievers", "#AdventureinRedLarch",
            "#RumorsofEvil", "#RedLarchLocations", "#ScandalandRebuilding"]),
    new MapInfo("ExploringtheValley", "the-dessarin-valley", "02-01.jpg", "fe5bf95b-c3b5-4881-9866-ba6bb7b8bc68", [
        new MapAreaInfo("Amphail", "130,991,148,1009"),
        new MapAreaInfo("BargewrightInn", "349,867,367,885"),
        new MapAreaInfo("Beliard", "487,529,505,547"),
        new MapAreaInfo("CultEncampments", "559,413,577,431"),
        new MapAreaInfo("CultEncampments", "340,807,358,825"),
        new MapAreaInfo("Goldenfields", "323,995,341,1013"),
        new MapAreaInfo("HallsoftheHuntingAxe", "547,610,565,628"),
        new MapAreaInfo("FeathergaleSpire", "318,660,336,678"),
        new MapAreaInfo("SacredStoneMonastery", "393,680,411,698"),
        new MapAreaInfo("ScarletMoonHall", "377,639,395,657"),
        new MapAreaInfo("RivergardKeep", "425,643,443,661"),
        new MapAreaInfo("HelvenbladeHouse", "238,359,256,377"),
        new MapAreaInfo("HighForest", "706,613,817,693"),
        new MapAreaInfo("KryptgardenForest", "45,384,199,457"),
        new MapAreaInfo("LanceRock", "200,696,218,714"),
        new MapAreaInfo("RundrethManor", "175,935,193,953"),
        new MapAreaInfo("StoneBridge", "446,514,464,532"),
        new MapAreaInfo("SumberHills", "295,490,384,552"),
        new MapAreaInfo("SummitHall", "520,682,538,700"),
        new MapAreaInfo("Triboar", "292,163,310,181"),
        new MapAreaInfo("ValeofDancingWaters", "423,618,441,636"),
        new MapAreaInfo("Westbridge", "264,403,282,421"),
        new MapAreaInfo("Westwood", "39,774,156,855"),
        new MapAreaInfo("Womford", "376,885,394,903"),
        new MapAreaInfo("Yartar", "493,156,511,174"),
        new MapAreaInfo("RedLarch", "242,667,260,685"),
        new MapAreaInfo("Homesteads", "599,475,617,493"),
        new MapAreaInfo("Homesteads", "687,452,705,470"),
        new MapAreaInfo("Homesteads", "334,364,352,382"),
        new MapAreaInfo("ShallowGraves", "353,703,371,721", "secret-of-the-sumber-hills"),
        new MapAreaInfo("TheDessarinRoad", "462,580,480,598", "secret-of-the-sumber-hills"),
        new MapToMapAreaInfo("02-02.jpg", "235,676,5"),
        new MapToMapAreaInfo("03-01.jpg", "310,669,5"),
        new MapToMapAreaInfo("03-03.jpg", "452,652,5"),
        new MapToMapAreaInfo("03-04.jpg", "385,689,5"),
        new MapToMapAreaInfo("03-05.jpg", "403,648,5"),
        new MapToMapAreaInfo("06-02.jpg", "209,721,5"),
        new MapToMapAreaInfo("06-04.jpg", "342,876,5"),
        new MapToMapAreaInfo("06-05.jpg", "713,461,5"),
        new MapToMapAreaInfo("06-06.jpg", "327,373,5"),
        new MapToMapAreaInfo("06-07.jpg", "432,610,5"),
        new MapToMapAreaInfo("06-08.jpg", "520,164,5"),
        new MapToMapAreaInfo("06-09.jpg", "574,619,5")
    ], ["#Travel", "#RandomEncounters", "#EarlyTravels", "#RiverTravels", "#LaterTravels",
            "#ValleySites", "#HauntedKeeps", "#Neverwinter", "#Waterdeep"]),
    new MapInfo("FeathergaleSpire", "secret-of-the-sumber-hills", "03-01.jpg", "99af7c86-1f99-41cd-aaba-ae245ff09ba1", [
        new MapAreaInfo("S1StableLevel", "130,655,155,670"),
        new MapAreaInfo("S2FrontHall", "105,493,130,508"),
        new MapAreaInfo("S3WeaponsLocker", "116,520,141,535"),
        new MapAreaInfo("S4CentralStairs", "175,480,200,495"),
        new MapAreaInfo("S5InitiateDormitory", "144,528,169,543"),
        new MapAreaInfo("S6Kitchen", "131,464,156,479"),
        new MapAreaInfo("S7Solarium", "174,507,199,522"),
        new MapAreaInfo("S8GreatHall", "165,338,190,353"),
        new MapAreaInfo("S9KnightsCells", "129,329,154,344"),
        new MapAreaInfo("S9KnightsCells", "105,352,130,367"),
        new MapAreaInfo("S9KnightsCells", "106,382,131,397"),
        new MapAreaInfo("S9KnightsCells", "129,405,154,420"),
        new MapAreaInfo("S9KnightsCells", "130,227,155,242"),
        new MapAreaInfo("S9KnightsCells", "129,280,154,295"),
        new MapAreaInfo("S9KnightsCells", "159,279,184,294"),
        new MapAreaInfo("S10MerosskasApartment", "171,242,196,257"),
        new MapAreaInfo("S11Pinnacle", "144,171,169,186"),
        new MapToMapAreaInfo("03-02.jpg", "66,500,10")
    ], ["#SpireApproach", "#SpireFeatures", "#FeathergaleMoat", "#AreasoftheSpire"]),
    new MapInfo("SighingValley", "secret-of-the-sumber-hills", "03-02.jpg", "779112a6-be6a-43ab-ae98-42e48789bd77", [
        new MapAreaInfo("V1FeathergaleSpire", "173,131,208,156"),
        new MapAreaInfo("V2DeadRocks", "307,141,342,166"),
        new MapAreaInfo("V3KnifepointGully", "452,162,487,187"),
        new MapAreaInfo("V4TheLostRiver", "99,425,134,450"),
        new MapAreaInfo("V5HowlingPlateau", "238,447,273,472"),
        new MapAreaInfo("V6TheLostRiver", "371,491,406,516"),
        new MapAreaInfo("V7GriffonRoost", "64,577,99,602"),
        new MapAreaInfo("V8AarakocraCamp", "250,614,285,639"),
        new MapAreaInfo("V9ManticoreLair", "399,633,434,658"),
        new MapToMapAreaInfo("03-01.jpg", "159,173,10"),
        new MapToMapAreaInfo("04-01.jpg", "537,158,10")
    ], ["#Features", "#AreasoftheValley"]),
    new MapInfo("RivergardKeep", "secret-of-the-sumber-hills", "03-03.jpg", "1e392996-5a6b-47ed-9bc8-7e1b640cc254", [
        new MapAreaInfo("K1FrontGate", "291,396,321,416"),
        new MapAreaInfo("K2Gatehouse", "340,466,370,486"),
        new MapAreaInfo("K3GatehouseUpperFloor", "100,346,130,366"),
        new MapAreaInfo("K4CastleYard", "400,385,430,405"),
        new MapAreaInfo("K5RuinedStable", "449,385,479,405"),
        new MapAreaInfo("K6Armory", "430,315,460,335"),
        new MapAreaInfo("K7Bathhouse", "429,276,459,296"),
        new MapAreaInfo("K8Barracks", "479,305,509,325"),
        new MapAreaInfo("K9WaterTower", "620,465,650,485"),
        new MapAreaInfo("K10Landing", "577,365,612,385"),
        new MapAreaInfo("K11WaterGate", "658,385,693,405"),
        new MapAreaInfo("K12MooredKeelboat", "698,305,733,325"),
        new MapAreaInfo("K13DarkStream", "618,275,653,295"),
        new MapAreaInfo("K14NorthTower", "657,126,692,146"),
        new MapAreaInfo("K15Chapel", "557,166,592,186"),
        new MapAreaInfo("K16GreatHall", "427,133,462,153"),
        new MapAreaInfo("K17ServantsQuarters", "316,181,351,201"),
        new MapAreaInfo("K18Kitchens", "318,128,353,148"),
        new MapAreaInfo("K19OldLibrary", "111,87,141,107"),
        new MapAreaInfo("K20KeepGuardroom", "110,136,140,156"),
        new MapAreaInfo("K21LordsChambers", "68,114,98,134"),
        new MapAreaInfo("K22SecretLanding", "107,466,142,486"),
        new MapToMapAreaInfo("04-02.jpg", "124,523,10"),
        new MapAreaInfo().rect(377, 162, 392, 177).content("e47a1a99-ed3d-4f78-875f-e3147cf67bd9"), // 16 - secret
        new MapAreaInfo().rect(96, 83, 111, 98).content("c67bf4b3-2754-434b-a90d-fa44263a6c53") // 19 - secret
    ], ["#InvestigatingRivergard", "#KeepFeatures", "#RaisingtheAlarm", "#AreasoftheKeep",
            "#Conclusion[data-content-chunk-id='e7adb907-6627-404c-8fcf-bd47fc9090f1']"]),
    new MapInfo("SacredStoneMonastery", "secret-of-the-sumber-hills", "03-04.jpg", "460b0128-bf86-4fca-b896-75e957df0402", [
        new MapAreaInfo("M1PassageofStone", "217,357,247,372"),
        new MapAreaInfo("M2BasaltHall", "217,306,247,321"),
        new MapAreaInfo("M3SouthDormitory", "159,314,189,329"),
        new MapAreaInfo("M4GuestQuarters", "109,315,139,330"),
        new MapAreaInfo("M5WestDormitory", "83,272,113,287"),
        new MapAreaInfo("M6Refectory", "109,222,139,237"),
        new MapAreaInfo("M7Kitchen", "109,170,139,185"),
        new MapAreaInfo("M8SandstoneCourt", "217,255,247,270"),
        new MapAreaInfo("M9ShrineofStone", "217,171,247,186"),
        new MapAreaInfo("M10Scriptorium", "301,315,331,330"),
        new MapAreaInfo("M11Stairs", "334,231,364,246"),
        new MapAreaInfo("M12AbbesssChambers", "308,180,338,195"),
        new MapAreaInfo("M13DistillingRoom", "367,189,397,204"),
        new MapAreaInfo("M14GardenofStone", "351,129,381,144"),
        new MapAreaInfo("M15Dojo", "359,272,389,287"),
        new MapAreaInfo("M16RenwicksTower", "425,205,455,220"),
        new MapAreaInfo("M17LichsQuarters", "425,256,455,271"),
        new MapAreaInfo("M18MineGuardroom", "375,592,405,607"),
        new MapAreaInfo("M19SlavePens", "459,660,489,675"),
        new MapAreaInfo("M20TheHauntedCrypt", "359,441,389,456"),
        new MapAreaInfo("M21HallofThirstingStone", "226,440,256,455"),
        new MapAreaInfo("M22Mines", "242,626,272,641"),
        new MapAreaInfo("M22Mines", "175,559,205,574"),
        new MapAreaInfo("M22Mines", "492,508,522,523"),
        new MapAreaInfo("M23HiddenTunnel", "75,559,105,574"),
        new MapAreaInfo("M24TheAncientStair", "92,440,122,455"),
        new MapToMapAreaInfo("04-03.jpg", "107,466,8")
    ], ["#InvestigatingtheMonastery", "#MonasteryFeatures", "#AreasoftheMonastery",
            "#Conclusion[data-content-chunk-id='a7186188-9c4b-4c75-ad9f-667b62b4f05d']"]),
    new MapInfo("ScarletMoonHall", "secret-of-the-sumber-hills", "03-05.jpg", "0a4bb389-5e2c-454c-8057-749adb2d8ba3", [
        new MapAreaInfo("Hc1DruidCamp", "167,488,197,503"),
        new MapAreaInfo("Hc2CultCamp", "394,470,424,485"),
        new MapAreaInfo("Hc3WerewolfCamp", "184,330,214,345"),
        new MapAreaInfo("Hc4CultCamp", "115,279,145,294"),
        new MapAreaInfo("Hc5FiddlersCamp", "116,192,146,207"),
        new MapAreaInfo("Hc6DruidCamp", "342,367,372,382"),
        new MapAreaInfo("Hc7BugbearCamp", "464,313,494,328"),
        new MapAreaInfo("H1Courtyard", "254,244,284,259"),
        new MapAreaInfo("H2WickerGiant", "272,192,302,207"),
        new MapAreaInfo("H3Kennel", "342,139,372,154"),
        new MapAreaInfo("H4Scaffolding", "217,138,247,153"),
        new MapAreaInfo("H5UpperEntryChamber", "725,350,755,365"),
        new MapAreaInfo("H6TheDownwardPath", "691,418,721,433"),
        new MapAreaInfo("H7CultistBarracks", "725,281,755,296"),
        new MapAreaInfo("H8ElizarsChamber", "702,213,732,228"),
        new MapAreaInfo("H9BatsintheAttic", "703,145,733,160"),
        new MapToMapAreaInfo("04-04.jpg", "715,508,13")
    ], ["#AreaFeatures", "#AscendingtheSlope", "#AreasoftheHall", "#Conclusion[data-content-chunk-id='21ae871e-00d0-4615-8bbb-61a633d53d26']"]),
    new MapInfo("TempleofHowlingHatred", "air-earth-fire-and-water", "04-01.jpg", "ddcc6bed-90f4-410d-8344-591468d49634", [
        new MapAreaInfo("A1PalaceQuarterEntrance", "39,727,64,742"),
        new MapAreaInfo("A2Gatehouse", "125,695,150,710"),
        new MapAreaInfo("A3MachineChamber", "326,576,351,591"),
        new MapAreaInfo("A4PlazaoftheMuses", "126,542,151,557"),
        new MapAreaInfo("A5TyarBesilShops", "255,250,280,265"),
        new MapAreaInfo("A5TyarBesilShops", "303,250,328,265"),
        new MapAreaInfo("A5TyarBesilShops", "161,253,186,268"),
        new MapAreaInfo("A5TyarBesilShops", "156,176,181,191"),
        new MapAreaInfo("A5TyarBesilShops", "258,177,283,192"),
        new MapAreaInfo("A5TyarBesilShops", "255,145,280,160"),
        new MapAreaInfo("A6PlazaofVergadain", "387,212,412,227"),
        new MapAreaInfo("A7PlazaofMoradin", "200,186,225,201"),
        new MapAreaInfo("A8RuinedVilla", "77,279,102,294"),
        new MapAreaInfo("A9Tombs", "80,142,105,157"),
        new MapAreaInfo("A10PalacePlaza", "201,322,226,337"),
        new MapAreaInfo("A11Moat", "145,295,170,310"),
        new MapAreaInfo("A12MoradinsShrine", "440,537,465,552"),
        new MapAreaInfo("A13VergadainsHall", "428,178,453,193"),
        new MapAreaInfo("A14LivingQuarters", "362,644,387,659"),
        new MapAreaInfo("A14LivingQuarters", "497,644,522,659"),
        new MapAreaInfo("A14LivingQuarters", "503,592,528,607"),
        new MapAreaInfo("A14LivingQuarters", "533,502,558,517"),
        new MapAreaInfo("A15PlazaofFallenSpires", "492,399,517,414"),
        new MapAreaInfo("A16ObeliskRow", "215,513,240,528"),
        new MapAreaInfo("A17ThePalaceWay", "409,399,434,414"),
        new MapAreaInfo("A18GrandHall", "211,398,236,413"),
        new MapAreaInfo("A19TempleofElementalAir", "427,91,452,106"),
        new MapAreaInfo("A19TempleofElementalAir", "271,389,326,424"),
        new MapAreaInfo("A20WormsTunnel", "531,203,556,218"),
        new MapToMapAreaInfo("03-02.jpg", "27,735,10"),
        new MapToMapAreaInfo("04-02.jpg", "574,635,7"),
        new MapToMapAreaInfo("04-04.jpg", "84,26,7"),
        new MapToMapAreaInfo("05-02.jpg", "541,248,10")
    ], ["#TempleFeatures[data-content-chunk-id='02c47328-f6b2-440b-b73d-73bfb4316681']",
            "#AreasoftheAirTemple", "#Conclusion[data-content-chunk-id='9bd73af5-7abe-41fd-89c6-7fb8a5bb3733']"]),
    new MapInfo("TempleoftheCrushingWave", "air-earth-fire-and-water", "04-02.jpg", "5df69135-caa9-4457-8117-1860e492c22a", [
        new MapAreaInfo("C1LakeLanding", "496,641,521,656"),
        new MapAreaInfo("C2Canals", "446,508,471,523"),
        new MapAreaInfo("C2Canals", "227,563,252,578"),
        new MapAreaInfo("C3WhisperLake", "356,592,381,607"),
        new MapAreaInfo("C4DrowningChambers", "420,694,445,709"),
        new MapAreaInfo("C5Gaol", "516,504,541,519"),
        new MapAreaInfo("C6VictoryBridge", "445,407,470,422"),
        new MapAreaInfo("C7ReaverBarracks", "538,421,563,436"),
        new MapAreaInfo("C8AncientSilos", "498,314,523,329"),
        new MapAreaInfo("C9NorthGuardPost", "547,205,572,220"),
        new MapAreaInfo("C10GargoyleFountain", "526,87,551,102"),
        new MapAreaInfo("C11CourtoftheMerfolk", "302,406,327,421"),
        new MapAreaInfo("C12TrollHole", "383,492,408,507"),
        new MapAreaInfo("C13BlackmawDen", "374,389,399,404"),
        new MapAreaInfo("C14HagLair", "259,375,284,390"),
        new MapAreaInfo("C15DragonBridge", "226,526,251,541"),
        new MapAreaInfo("C16ThunderhammerBrewery", "136,523,161,538"),
        new MapAreaInfo("C17MorbeothsWorkshop", "71,459,96,474"),
        new MapAreaInfo("C18WestGuardPost", "37,566,62,581"),
        new MapAreaInfo("C19CavernLakeshore", "124,621,149,636"),
        new MapAreaInfo("C20GatedPassage", "37,628,62,643"),
        new MapAreaInfo("C21StarryLake", "138,288,163,303"),
        new MapAreaInfo("C22MarketHall", "319,320,344,335"),
        new MapAreaInfo("C23Galley", "388,240,413,255"),
        new MapAreaInfo("C24BridgeofHeroes", "301,220,326,235"),
        new MapAreaInfo("C25TempleofElementalWater", "301,119,326,134"),
        new MapAreaInfo("C26Vault", "415,68,440,83"),
        new MapAreaInfo("C27PriestsQuarters", "204,112,229,127"),
        new MapAreaInfo("C28CaravanStairs", "48,212,73,227"),
        new MapToMapAreaInfo("03-03.jpg", "571,675,10"),
        new MapToMapAreaInfo("04-01.jpg", "25,635,7"),
        new MapToMapAreaInfo("04-03.jpg", "533,27,7"),
        new MapToMapAreaInfo("05-01.jpg", "60,195,8")
    ], ["#TheDarkStream", "#TempleFeatures[data-content-chunk-id='44f480df-2418-4ca8-9b13-f703153997cb']",
            "#AreasoftheWaterTemple", "#Conclusion[data-content-chunk-id='8120bfd2-962b-479c-ad0f-a0554344cddd']"]),
    new MapInfo("TempleofBlackEarth", "air-earth-fire-and-water", "04-03.jpg", "2f49eeab-9095-4356-8374-99a4e5c81bab", [
        new MapAreaInfo("B1GargoyleChasm", "502,119,527,134"),
        new MapAreaInfo("B2NorthChasm", "325,117,350,132"),
        new MapAreaInfo("B3RuinedGates", "457,213,482,228"),
        new MapAreaInfo("B4HalloftheGate", "454,290,479,305"),
        new MapAreaInfo("B5EastGuardroom", "538,289,563,304"),
        new MapAreaInfo("B6YarshasBurrow", "366,238,391,253"),
        new MapAreaInfo("B7GatewardensQuarters", "396,340,421,355"),
        new MapAreaInfo("B8MudSorcerersLab", "521,425,546,440"),
        new MapAreaInfo("B9BrokenHall", "491,526,516,541"),
        new MapAreaInfo("B10LongChasm", "392,548,417,563"),
        new MapAreaInfo("B11SouthPassage", "521,697,546,712"),
        new MapAreaInfo("B12BroogNorbsLair", "324,693,349,708"),
        new MapAreaInfo("B13HuntingHall", "191,566,216,581"),
        new MapAreaInfo("B14TortureChamber", "196,631,221,646"),
        new MapAreaInfo("B15StoneForge", "286,493,311,508"),
        new MapAreaInfo("B16Armory", "107,558,132,573"),
        new MapAreaInfo("B17ChasmStaircase", "73,416,98,431"),
        new MapAreaInfo("B18Barracks", "218,374,243,389"),
        new MapAreaInfo("B19StatueofOgrmoch", "235,306,260,321"),
        new MapAreaInfo("B20MessHall", "287,223,312,238"),
        new MapAreaInfo("B21ScreamingStatues", "194,152,219,167"),
        new MapAreaInfo("B22EarthProphetsSanctum", "224,87,249,102"),
        new MapAreaInfo("B23ShrineofBleedingStone", "59,241,84,256"),
        new MapAreaInfo("B24SentinelsHall", "66,154,91,169"),
        new MapAreaInfo().rect(278, 83, 298, 103).content("e30071a6-981e-4db7-b1b4-081b846c8762"), // 22 - secret
        new MapToMapAreaInfo("03-04.jpg", "575,43,7"),
        new MapToMapAreaInfo("04-02.jpg", "533,737,7"),
        new MapToMapAreaInfo("04-04.jpg", "24,635,7"),
        new MapToMapAreaInfo("04-04.jpg", "24,128,7"),
        new MapToMapAreaInfo("05-01.jpg", "110,450,7")
    ], ["#TheAncientStair", "#TempleFeatures[data-content-chunk-id='8c22d4d4-04f9-4512-83de-73b18c4e776d']",
            "#AreasoftheEarthTemple", "#Conclusion[data-content-chunk-id='719aeebd-a0aa-4b38-8e45-8bff7e6deea2']"]),
    new MapInfo("TempleofEternalFlame", "air-earth-fire-and-water", "04-04.jpg", "3bb5243a-4744-46d6-9204-360a87baf43e", [
        new MapAreaInfo("E1Entrance", "137,95,162,110"),
        new MapAreaInfo("E2ColumnedChamber", "238,94,263,109"),
        new MapAreaInfo("E3NicheHall", "402,84,427,99"),
        new MapAreaInfo("E4HiddenVault", "415,159,440,174"),
        new MapAreaInfo("E5CrumblingBarricades", "519,116,544,131"),
        new MapAreaInfo("E6BastiansQuarters", "64,186,89,201"),
        new MapAreaInfo("E7Barracks", "116,237,141,252"),
        new MapAreaInfo("E8PriestsRoom", "64,271,89,286"),
        new MapAreaInfo("E9OgreDen", "182,169,207,184"),
        new MapAreaInfo("E10HobgoblinLair", "244,211,269,226"),
        new MapAreaInfo("E11Cellblock", "438,255,463,270"),
        new MapAreaInfo("E12LavaChasm", "160,357,185,372"),
        new MapAreaInfo("E13Foundry", "351,373,376,388"),
        new MapAreaInfo("E14ShafttotheFireNode", "453,372,478,387"),
        new MapAreaInfo("E15AncientArmory", "544,346,569,361"),
        new MapAreaInfo("E16Well", "62,471,87,486"),
        new MapAreaInfo("E17MechanicalRoom", "221,469,246,484"),
        new MapAreaInfo("E18Library", "520,440,545,455"),
        new MapAreaInfo("E19Kennel", "263,524,288,539"),
        new MapAreaInfo("E20andE21StorageRooms", "315,525,340,540"),
        new MapAreaInfo("E20andE21StorageRooms", "365,525,390,540"),
        new MapAreaInfo("E22DisplayHall", "458,527,483,542"),
        new MapAreaInfo("E23Barracks", "516,559,541,574"),
        new MapAreaInfo("E24IgnatiasAbode", "538,507,563,522"),
        new MapAreaInfo("E25SupplicantsRoom", "155,576,180,591"),
        new MapAreaInfo("E26FireTemple", "331,610,356,625"),
        new MapAreaInfo("E27Barricades", "60,664,85,679"),
        new MapAreaInfo("E28Barracks", "138,680,163,695"),
        new MapAreaInfo("E29LyzziesQuarters", "186,668,211,683"),
        new MapAreaInfo("E30ChimeraLair", "479,651,504,666"),
        new MapAreaInfo("E31VanifersChamber", "399,711,424,726"),
        new MapAreaInfo().rect(419, 102, 434, 117).content("17659190-e566-4329-99f0-f5881e4e7d8b"), // 3 - secret
        new MapToMapAreaInfo("03-05.jpg", "25,77,7"),
        new MapToMapAreaInfo("04-01.jpg", "73,735,8"),
        new MapToMapAreaInfo("04-03.jpg", "573,617,8"),
        new MapToMapAreaInfo("04-03.jpg", "577,76,8"),
        new MapToMapAreaInfo("05-01.jpg", "463,405,8")
    ], ["#LavaTubes", "#TempleFeatures[data-content-chunk-id='04b27d5e-013e-4ce3-8b54-846c7f107ab3']",
            "#AreasoftheFireTemple", "#Conclusion[data-content-chunk-id='c92ab260-a08a-48bf-a8c1-3181caba57a2']"]),
    new MapInfo("FaneoftheEye", "temple-of-the-elder-elemental-eye", "05-01.jpg", "6ed2ba96-a7a7-4169-afb7-20a84dda4695", [
        new MapAreaInfo("F1WormsStair", "167,686,192,701"),
        new MapAreaInfo("F2HowlingPit", "59,528,84,543"),
        new MapAreaInfo("F3WindPrison", "282,604,307,619"),
        new MapAreaInfo("F4HarpyNest", "236,521,261,536"),
        new MapAreaInfo("F5RustMonsterPit", "355,708,380,723"),
        new MapAreaInfo("F6SwiftStream", "472,676,497,691"),
        new MapAreaInfo("F7BlackmawThrone", "437,523,462,538"),
        new MapAreaInfo("F8ThePlunge", "522,455,547,470"),
        new MapAreaInfo("F9FungalSwamp", "438,405,463,420"),
        new MapAreaInfo("F10FoebreakersCrypt", "530,267,555,282"),
        new MapAreaInfo("F11FootoftheObelisk", "438,100,463,115"),
        new MapAreaInfo("F12AbandonedMine", "378,94,403,109"),
        new MapAreaInfo("F13HallofBlackCrystal", "386,218,411,233"),
        new MapAreaInfo("F14ZegdarsLair", "270,58,295,73"),
        new MapAreaInfo("F15FieryThroat", "119,97,144,112"),
        new MapAreaInfo("F16EmberhornDen", "218,150,243,165"),
        new MapAreaInfo("F17AncientConjury", "179,261,204,276"),
        new MapAreaInfo("F18DrowTomb", "69,186,94,201"),
        new MapAreaInfo("F19ThatWhichLurks", "269,304,294,319"),
        new MapAreaInfo("F20HallofBattle", "303,422,328,437"),
        new MapAreaInfo("F21TempleoftheElderElementalEye", "132,388,157,403"),
        new MapToMapAreaInfo("04-01.jpg", "179,710,7"),
        new MapToMapAreaInfo("04-02.jpg", "481,616,7"),
        new MapToMapAreaInfo("04-03.jpg", "518,89,7"),
        new MapToMapAreaInfo("04-04.jpg", "97,113,7"),
        new MapToMapAreaInfo("05-02.jpg", "71,517,7"),
        new MapToMapAreaInfo("05-03.jpg", "549,379,7"),
        new MapToMapAreaInfo("05-04.jpg", "471,228,7"),
        new MapToMapAreaInfo("05-05.jpg", "97,135,7")
    ], ["#FaneFeatures", "#AreasoftheFane", "#Conclusion[data-content-chunk-id='588feb41-80d0-4b96-b9ad-d1169d5bc8ef']"]),
    new MapInfo("TheHowlingCaves", "temple-of-the-elder-elemental-eye", "05-02.jpg", "baeb48a7-55aa-4bde-83fe-218cacd5005e", [
        new MapAreaInfo("N1Entrance", "198,438,228,463"),
        new MapAreaInfo("N2DeadlyPool", "246,240,276,265"),
        new MapAreaInfo("N3Oubliette", "274,126,304,151"),
        new MapAreaInfo("N4StormChasm", "316,424,346,449"),
        new MapAreaInfo("N5SvirfneblinSettlement", "359,283,389,308"),
        new MapAreaInfo("N6BreathlessCave", "395,509,425,534"),
        new MapAreaInfo("N7TheFloatingOnes", "495,297,525,322"),
        new MapAreaInfo("N8WindChorus", "467,68,497,93"),
        new MapAreaInfo("N9MushroomForest", "566,367,596,392"),
        new MapAreaInfo("N10StalagmiteGarden", "518,226,558,251"),
        new MapAreaInfo("N11HerosTomb", "578,477,618,502"),
        new MapAreaInfo("N12GlowingMere", "652,467,692,492"),
        new MapAreaInfo("N13aN13bWhisperingCaverns", "606,125,656,150"),
        new MapAreaInfo("N13aN13bWhisperingCaverns", "672,112,722,137"),
        new MapAreaInfo("N14AirNodesDoorstep", "588,270,628,295"),
        new MapAreaInfo("N15Windhuggers", "660,312,700,337"),
        new MapAreaInfo("N16TorturedCavern", "760,412,800,437"),
        new MapAreaInfo("N17Sacrifices", "727,237,767,262"),
        new MapAreaInfo("N18RoyalGuard", "772,132,812,157"),
        new MapAreaInfo("N19AirPortal", "729,98,769,123"),
        new MapToMapAreaInfo("05-01.jpg", "198,401,8")
    ], ["#CaveFeatures", "#AreasoftheCaves"]),
    new MapInfo("ThePlungingTorrents", "temple-of-the-elder-elemental-eye", "05-03.jpg", "5cfb5219-3715-4fe4-85c3-06584cb3d4c4", [
        new MapAreaInfo("P1WaterfallBasin", "293,145,318,165"),
        new MapAreaInfo("P2PlungingPassage", "208,105,233,125"),
        new MapAreaInfo("P3Nets", "95,230,120,250"),
        new MapAreaInfo("P4TempleEntrance", "67,315,92,335"),
        new MapAreaInfo("P5ShrineofYngukulub", "117,268,142,288"),
        new MapAreaInfo("P6YngukulubtheDevourer", "180,271,205,291"),
        new MapAreaInfo("P7QuipperPit", "63,428,88,448"),
        new MapAreaInfo("P8SlopingCave", "55,475,80,495"),
        new MapAreaInfo("P9CrushingWaveOutpost", "110,570,135,590"),
        new MapAreaInfo("P10TrialbyWater", "477,102,507,122"),
        new MapAreaInfo("P11HuntersDen", "304,272,334,292"),
        new MapAreaInfo("P12FeedingCave", "405,272,435,292"),
        new MapAreaInfo("P13TheHungry", "492,200,522,220"),
        new MapAreaInfo("P14EyeofAnguish", "504,328,534,348"),
        new MapAreaInfo("P15ReflectionChamber", "420,427,450,447"),
        new MapAreaInfo("P16HutoftheDarkTide", "435,513,465,533"),
        new MapAreaInfo("P17ElementalGuardian", "191,202,221,222"),
        new MapAreaInfo("P18Wrecks", "278,442,308,462"),
        new MapAreaInfo("P19aP19bVortexes", "118,491,158,511"),
        new MapAreaInfo("P19aP19bVortexes", "339,374,379,394"),
        new MapAreaInfo("P20WaterPortal", "334,570,364,590"),
        new MapAreaInfo().rect(429, 383, 449, 403).content("c176f61d-c3bf-47af-99b3-ff9057077160"), // 15 -secret
        new MapAreaInfo().rect(335, 317, 355, 337).content("c176f61d-c3bf-47af-99b3-ff9057077160"), // 15 -secret
        new MapToMapAreaInfo("05-01.jpg", "307,224,7")
    ], ["#TorrentsFeatures", "#AreasoftheTorrents"]).tocHId("ThePlungingTorrent"),
    new MapInfo("TheBlackGeode", "temple-of-the-elder-elemental-eye", "05-04.jpg", "0b40b5b9-5f7a-4afd-84d4-24e9e73d3850", [
        new MapAreaInfo("G1HalloftheGuardians", "429,671,459,686"),
        new MapAreaInfo("G2KeltarandGorx", "299,613,329,628"),
        new MapAreaInfo("G3RoperDen", "473,570,503,585"),
        new MapAreaInfo("G4BewilderingCrystals", "131,592,161,607"),
        new MapAreaInfo("G5UnderdarkEntrance", "126,672,156,687"),
        new MapAreaInfo("G6MudflowFalls", "241,541,271,556"),
        new MapAreaInfo("G7EmptyCave", "385,454,415,469"),
        new MapAreaInfo("G7EmptyCave", "371,309,401,324"),
        new MapAreaInfo("G8CavernoftheLostCrown", "487,454,517,469"),
        new MapAreaInfo("G9NarrowStoneBridge", "222,396,252,411"),
        new MapAreaInfo("G10ClicketyClack", "283,368,313,383"),
        new MapAreaInfo("G11ElementalMudPool", "472,324,502,339"),
        new MapAreaInfo("G12HallofMeditation", "109,324,139,339"),
        new MapAreaInfo("G13BuletteKennels", "148,223,178,238"),
        new MapAreaInfo("G14RorgrinsCave", "269,295,299,310"),
        new MapAreaInfo("G15ArcaneFoundry", "284,208,314,223"),
        new MapAreaInfo("G16CathedralofStone", "147,71,177,86"),
        new MapAreaInfo("G17EarthPortal", "428,107,458,122"),
        new MapAreaInfo().rect(201, 649, 216, 664).content("883751bb-baeb-4779-b0f6-370ced95fb02"), // 4 - secret
        new MapToMapAreaInfo("05-01.jpg", "569,670,7")
    ], ["#GeodeFeatures", "#AreasoftheGeode"]),
    new MapInfo("TheWeepingColossus", "temple-of-the-elder-elemental-eye", "05-05.jpg", "557cf502-a32a-4c9f-a636-f257fdd82e88", [
        new MapAreaInfo("W1VolcanicShaft", "113,680,143,695"),
        new MapAreaInfo("W2SentryChamber", "87,558,117,573"),
        new MapAreaInfo("W3Causeway", "196,604,226,619"),
        new MapAreaInfo("W4PoolofLava", "196,527,226,542"),
        new MapAreaInfo("W5ChamberofSkulls", "74,466,104,481"),
        new MapAreaInfo("W6Prison", "75,404,105,419"),
        new MapAreaInfo("W7BreedingChamber", "150,451,180,466"),
        new MapAreaInfo("W8FireShrine", "212,343,242,358"),
        new MapAreaInfo("W9EfreetiLair", "199,388,229,403"),
        new MapAreaInfo("W10VanifersChamber", "242,270,272,285"),
        new MapAreaInfo("W11FlowingLava", "135,328,165,343"),
        new MapAreaInfo("W12FirePortal", "151,220,181,235"),
        new MapAreaInfo().rect(143, 605, 158, 620).content("7acd49e3-3109-43cd-b2e0-f97489c8e3d3"), // a
        new MapAreaInfo().rect(90, 704, 105, 719).content("7acd49e3-3109-43cd-b2e0-f97489c8e3d3"), // b
        new MapAreaInfo().rect(57, 518, 72, 533).content("f4e7255b-17b8-40b9-a278-50593c031991"), // 2 - secret
        new MapAreaInfo().rect(55, 483, 70, 498).content("6018e0d8-e1a9-4f41-a113-971ab69b49fc"), // c
        new MapAreaInfo().rect(113, 469, 128, 484).content("6018e0d8-e1a9-4f41-a113-971ab69b49fc"), // d
        new MapToMapAreaInfo("05-01.jpg", "166,688,10")
    ], ["#ColossusFeatures", "#AreasoftheColossus"]),
    new MapInfo("TroubleinRedLarch", "alarums-and-excursions", "06-01.jpg", "0054d732-e312-4acd-8b6e-807204bae534", [
        new MapAreaInfo("LanceRock", "92,145,122,175"),
        new MapAreaInfo("BearsandBows", "117,386,147,416"),
        new MapAreaInfo("HauntedTomb", "278,353,308,383"),
        new MapAreaInfo("TheLastLaugh", "404,451,434,481"),
        new MapAreaInfo("BloodyTreasure", "302,495,332,525"),
        new MapToMapAreaInfo("06-02.jpg", "136,160,10"),
        new MapToMapAreaInfo("02-02.jpg", "203,306,10"),
        new MapToMapAreaInfo("03-01.jpg", "154,782,10"),
        new MapToMapAreaInfo("03-05.jpg", "361,780,10")
    ], ["#ArrivalinRedLarch", "#IntotheWilderness"]),
    new MapInfo("NecromancersCave", "alarums-and-excursions", "06-02.jpg", "b2703f0f-ecd2-48e0-8e69-c178694b2291", [
        new MapAreaInfo("L1EntryCave", "439,697,469,727"),
        new MapAreaInfo("L2GuardCave", "423,470,453,500"),
        new MapAreaInfo("L3CorpseCave", "511,435,541,465"),
        new MapAreaInfo("L4DancingDead", "244,485,274,515"),
        new MapAreaInfo("L5Workshop", "92,347,122,377"),
        new MapAreaInfo("L6Study", "424,103,454,133"),
        new MapToMapAreaInfo("06-01.jpg", "212,712,15")
    ], []),
    new MapInfo("TombofMovingStones", "alarums-and-excursions", "06-03.jpg", "532eb525-2dbb-40d7-9f08-c855463cc2f1", [
        new MapAreaInfo("T1EntryCavern", "114,334,139,359"),
        new MapAreaInfo("T2StoneSentinels", "234,345,259,370"),
        new MapAreaInfo("T3CageTrap", "348,344,373,369"),
        new MapAreaInfo("T4Antechamber", "453,364,478,389"),
        new MapAreaInfo("T5CharnelChamber", "393,201,418,226"),
        new MapAreaInfo("T6HoveringStone", "482,157,507,182"),
        new MapAreaInfo("T7DwarfStatue", "525,363,550,388"),
        new MapAreaInfo("T8Approach", "597,344,622,369"),
        new MapAreaInfo("T9ChamberofMovingStones", "726,345,751,370"),
        new MapAreaInfo().rect(801, 428, 821, 448).content("c860076e-8734-4137-8e89-e8bf72e52a0c", "af679329-6f18-4cbc-97c2-8a2165d427ed"), // 9 - secret
        new MapAreaInfo().rect(797, 465, 817, 485).content("95915902-652c-4a77-9375-510065013552"), // 9 - x
        new MapToMapAreaInfo("02-02.jpg", "98,350,14"),
        new MapToMapAreaInfo("02-02.jpg", "169,33,7"),
        new MapToMapAreaInfo("02-02.jpg", "816,509,7")
    ], ["#Sinkhole", "#Conclusion[data-content-chunk-id='fd884ea4-7d19-4d91-9061-c35637f5d0be']"]),
    new MapInfo("NewManagement", "alarums-and-excursions", "06-04.jpg", "5e0d324f-bc46-4f7e-ba4d-b3821ca738c0", [
    ], ["#Setup[data-content-chunk-id='e65a5c50-5f40-414b-a433-1632ea7f6254']", "#KeyDuty", "#SearchfortheKeys",
            "#StrongRoomBurglary", "#GeneralAlarm", "#Conclusion[data-content-chunk-id='108d18ac-0934-49ca-bd66-5e5ea8333fbf']"]),
    new MapInfo("DellmonRanch", "alarums-and-excursions", "06-05.jpg", "5b430fb5-5a6f-4b83-99ee-30a1220a7e3b", [
    ], ["#RunningtheSiege", "#Conclusion[data-content-chunk-id='e8c5fe46-85c2-4167-8c8a-4c3e0abce064']"]),
    new MapInfo("BarrowMound", "alarums-and-excursions", "06-06.jpg", "4930d97b-36bb-423c-a833-223294a202d1", [
    ], ["#UthgardtVengeance"]),
    new MapInfo("ShrineoftheTenderOath", "alarums-and-excursions", "06-07.jpg", "e0c22939-2e27-4702-95f8-352f5f1faf3a", [
        new MapAreaInfo("D1Switchbacks", "388,653,423,683"),
        new MapAreaInfo("D2ShrineEntrance", "315,442,350,472"),
        new MapAreaInfo("D3Courtyard", "317,368,352,398"),
        new MapAreaInfo("D4Dormitory", "126,317,161,347"),
        new MapAreaInfo("D5Chapel", "462,317,497,347"),
        new MapAreaInfo("D6HallofVows", "314,114,349,144"),
        new MapAreaInfo("D7Temple", "167,646,202,676")
    ], ["#Setup[data-content-chunk-id='a571bbcf-ec5a-4dbe-a401-da15874b6d7d']",
            "#Conclusion[data-content-chunk-id='b7318e2a-61c0-4ab7-8c8f-7711652380da']"]),
    new MapInfo("DarkDealingsinYartar", "alarums-and-excursions", "06-08.jpg", "d2b46f27-42ce-4fe7-ba66-03e1bd78539a", [
    ], ["#Background[data-content-chunk-id='8d48f244-b2ad-4c6d-a387-c0522423d8b0']",
            "#Setup[data-content-chunk-id='f8889f1f-1d32-49b9-80a9-c2a459a45b11']", "#ArrivalinYartar", "#TheWinkandKiss",
            "#MeetingattheTomb", "#Conclusion[data-content-chunk-id='022307cb-a386-4a20-9e11-69371b3a1784']"]),
    new MapInfo("HallsoftheHuntingAxe", "alarums-and-excursions", "06-09.jpg", "fc40fcb9-c4b4-4659-b839-4ebc2be5a8b0", [
        new MapAreaInfo("X1OwlbearGreetings", "275,543,310,563"),
        new MapAreaInfo("X2CrumblingArch", "195,447,230,467"),
        new MapAreaInfo("X3Watchtower", "416,431,451,451"),
        new MapAreaInfo("X4AncientHall", "279,369,314,389"),
        new MapAreaInfo("X5Cistern", "221,183,256,203"),
        new MapAreaInfo("X6Amphitheater", "135,256,170,276"),
        new MapAreaInfo("X7EntrancetotheCrypts", "361,231,396,251"),
        new MapAreaInfo("X8HalloftheFallen", "663,223,698,243"),
        new MapAreaInfo("X9FalseCrypt", "545,220,580,240"),
        new MapAreaInfo("X10FalseTomb", "711,461,746,481"),
        new MapAreaInfo().rect(589, 251, 604, 266).content("8d79b93d-5ba1-495b-bfb9-959a352697e5", "8f3d3eb8-8517-49cf-803a-7e81b13865a4"), // 9 - secret
        new MapAreaInfo().rect(682, 496, 697, 511).content("9b6e6d0d-9e8e-4919-96a7-3bb56b25e357"), // 10 - secret
        new MapAreaInfo("X11TheTrueTombofKingTorhildFlametongue", "602,434,637,454")
    ], ["#TheRuins[data-content-chunk-id='0ad44212-93ed-420c-ac43-6d61990152dc']", "#Aftermath"])
];

const extraMapLinks = [
    new MapLinksInfo("secret-of-the-sumber-hills", "the-dessarin-valley", "fe5bf95b-c3b5-4881-9866-ba6bb7b8bc68", [
        "#ShallowGraves"
    ])
];

const path = "adventures/pota/";

MapRefs.processMaps(maps, extraMapLinks, path);

class MapsPotA extends MapRefs {
    static get path() {
        return path;
    }

    static get maps() {
        return maps;
    }

    static get extraMapLinks() {
        return extraMapLinks;
    }
}

export default MapsPotA;