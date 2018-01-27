//information
/*
hit /formolecule
keys molecule , nskip ,page
page means you want info | brands | combination

string to array
function
String lines[] = string.split("\\r?\\n");

{
	"message": "molecule information",
	"data": [{
		"_id": "5a6491f346918629f8b7dc98",
		"molecule_name": "Aceclofenac",
		"drug_categories": "Anti-Inflammatory Agents",
		"description": "Aceclofenac is a non-steroidal anti-inflammatory drug (NSAID) with marked anti-inflammatory and analgesic properties.\nIt is reported to have a higher anti-inflammatory action or at least comparable effects than conventional NSAIDs in double-blind studies [2, 3, 5].\nAceclofenac potently inhibits the cyclo-oxygenase enzyme (COX) that is involved in the synthesis of prostaglandins, which are inflammatory mediators that cause pain, swelling, inflammation, and fever.\nIt is orally administered for the relief of pain and inflammation in osteoarthritis, rheumatoid arthritis and ankylosing spondylitis. Aceclofenac belongs to BCS Class II as it possesses poor aqueous solubility [2].\nIt displays high permeability to penetrate into synovial joints where in patients with osteoarthritis and related conditions, the loss of articular cartilage in the area causes joint pain, tenderness, stiffness, crepitus, and local inflammation [1].\nAceclofenac is also reported to be effective in other painful conditions such as dental and gynaecological conditions [7].\nIn 1991, aceclofenac was developed as an analog of a commonly prescribed NSAID, Diclofenac, via chemical modification in effort to improve the gastrointestinal tolerability of the drug. It is a more commonly prescribed drug in Europe.",
		"absorption": "Aceclofenac is rapidly and completely absorbed from the gastrointestinal tract and circulates mainly as unchanged drug following oral administration.\nPeak plasma concentrations are reached around 1.25 to 3 hours post-ingestion, and the drug penetrates into the synovial fluid where the concentration may reach up to 60% of that in the plasma [11].\nThere is no accumulation in regular dosing, with similar maximum plasma concentration (Cmax) and time to reach peak plasma concentration (Tmax) after single and multiple doses [2].",
		"distribution": "The volume of distribution is approximately 25 L [11].",
		"metabolism": "4'-hydroxyaceclofenac is the main metabolite detected in plasma however other minor metabolites include diclofenac, 5-hydroxyaceclofenac, 5-hydroxydiclofenac, and 4'-hydroxydiclofenac [2].\nIt is probable that the metabolism of aceclofenac is mediated by CYP2C9 [9]",
		"excretion": "not available",
		"side_effect": "",
		"precaution": "",
		"food": "",
		"source": "Raza K, Kumar M, Kumar P, Malik R, Sharma G, Kaur M, Katare OP: Topical delivery of aceclofenac: challenges and promises of novel drug delivery systems. Biomed Res Int. 2014;2014:406731. doi: 10.1155/2014/406731. Epub 2014 Jun 18. [PubMed:25045671]\nLegrand E: Aceclofenac in the management of inflammatory pain. Expert Opin Pharmacother. 2004 Jun;5(6):1347-57. [PubMed:15163279]\nPareek A, Chandurkar N: Comparison of gastrointestinal safety and tolerability of aceclofenac with diclofenac: a multicenter, randomized, double-blind study in patients with knee osteoarthritis. Curr Med Res Opin. 2013 Jul;29(7):849-59. doi: 10.1185/03007995.2013.795139. Epub 2013 Apr 30. [PubMed:23581533]\nMoore RA, Derry S, McQuay HJ: Single dose oral aceclofenac for postoperative pain in adults. Cochrane Database Syst Rev. 2009 Jul 8;(3):CD007588. doi: 10.1002/14651858.CD007588.pub2. [PubMed:19588436]",
		"__v": 0,
		"contradictions": [{
			"_id": "5a6491f346918629f8b7dc99",
			"info": "",
			"subhead": ""
		}],
		"dosage": [{
			"_id": "5a6491f346918629f8b7dc9a",
			"info": "",
			"subhead": ""
		}],
		"other_interaction": [{
			"_id": "5a6491f346918629f8b7dc9b",
			"info": "",
			"subhead": ""
		}],
		"other_drug_interaction": [{
			"_id": "5a6491f346918629f8b7dc9c",
			"info": "The risk or severity of adverse effects can be increased when Aceclofenac is combined with 16-Bromoepiandrosterone,The risk or severity of adverse effects can be increased when Aceclofenac is combined with 19-norandrostenedione.,The risk or severity of adverse effects can be increased when Aceclofenac is combined with 5-androstenedione.",
			"subhead": "16-Bromoepiandrosterone,19-norandrostenedione,5-androstenedione"
		}]
	}]
}
 */

//brands
/*
hit /formolecule
keys molecule , nskip ,page
page means you what want    brands
here molecules = Aceclofenac

{
	"message": "molecule brand",
	"data": [{
		"results": {
			"strength": "1000",
			"strength_unit": "mg",
			"packaging": "100 ml",
			"price": "257.13",
			"dose_taken": "Empty Food",
			"dose_timing": "BD",
			"warnings": "Not to be used in pregnancy",
			"prescription": "Needed",
			"brands_id": [{
				"brand_name": "AALCETAMOL",
				"categories": "NSAID`s",
				"types": "Branded",
				"company_id": [{
					"company_name": "Aaltramed Healthcare",
					"brand_id": ["5a64513ee1609631e8fdf520"]
				}],
				"dosage_id": [{
					"dosage_form": "Infusion",
					"strength_id": ["5a64513ee1609631e8fdf51d"]
				}],
				"primarily_used_for": ["Joint Pain"]
			}],
			"potent_substance": {
				"name": ["Aceclofenac","guu","guu"],
				"molecule_strength": ["1000 mg","fuk","fku"]
			}
		}
	}, {
		"results": {
			"strength": "100",
			"strength_unit": "mg",
			"packaging": "10",
			"price": "30",
			"dose_taken": "",
			"dose_timing": "",
			"warnings": "",
			"prescription": "",
			"brands_id": [{
				"brand_name": "ZERODOL",
				"categories": "NSAID`s",
				"types": "",
				"company_id": [{
					"company_name": "Ipca",
					"brand_id": ["5a6451f5e1609631e8fdf525", "5a6456c7e1609631e8fdf552"]
				}],
				"dosage_id": [{
					"dosage_form": "Tablet",
					"strength_id": ["5a6451f5e1609631e8fdf522"]
				}, {
					"dosage_form": "Injection",
					"strength_id": ["5a64523de1609631e8fdf52c", "5a645666e1609631e8fdf54d"]
				}],
				"primarily_used_for": [""]
			}],
			"potent_substance": [{
				"name": "Aceclofenac",
				"molecule_strength": "100 mg"
			}]
		}
	}, {
		"results": {
			"strength_unit": "mg",
			"packaging": "1 ml",
			"price": "15",
			"dose_taken": "",
			"dose_timing": "",
			"warnings": "",
			"prescription": "",
			"brands_id": [{
				"brand_name": "ZERODOL",
				"categories": "NSAID`s",
				"types": "",
				"company_id": [{
					"company_name": "Ipca",
					"brand_id": ["5a6451f5e1609631e8fdf525", "5a6456c7e1609631e8fdf552"]
				}],
				"dosage_id": [{
					"dosage_form": "Tablet",
					"strength_id": ["5a6451f5e1609631e8fdf522"]
				}, {
					"dosage_form": "Injection",
					"strength_id": ["5a64523de1609631e8fdf52c", "5a645666e1609631e8fdf54d"]
				}],
				"primarily_used_for": [""]
			}],
			"potent_substance": [{
				"name": "Aceclofenac",
				"molecule_strength": "150 mg"
			}]
		}
	}, {
		"results": {
			"strength_unit": "mg",
			"packaging": "10",
			"price": "50",
			"dose_taken": "",
			"dose_timing": "",
			"warnings": "",
			"prescription": "",
			"brands_id": [{
				"brand_name": "ZERODOL CR",
				"categories": "NSAID`s",
				"types": "",
				"company_id": [{
					"company_name": "Ipca",
					"brand_id": ["5a6451f5e1609631e8fdf525", "5a6456c7e1609631e8fdf552"]
				}],
				"dosage_id": [{
					"dosage_form": "Tablet",
					"strength_id": ["5a6456c7e1609631e8fdf54f"]
				}],
				"primarily_used_for": [""]
			}],
			"potent_substance": [{
				"name": "Aceclofenac",
				"molecule_strength": "200 mg"
			}]
		}
	}, {
		"results": {
			"strength": "100",
			"strength_unit": "mg",
			"packaging": "10",
			"price": "17.90",
			"dose_taken": "",
			"dose_timing": "",
			"warnings": "",
			"prescription": "",
			"brands_id": [{
				"brand_name": "ZIX",
				"categories": "NSAID`s",
				"types": "",
				"company_id": [{
					"company_name": "Jenburkt",
					"brand_id": ["5a645723e1609631e8fdf55a"]
				}],
				"dosage_id": [{
					"dosage_form": "Tablet",
					"strength_id": ["5a645723e1609631e8fdf557"]
				}],
				"primarily_used_for": [""]
			}],
			"potent_substance": [{
				"name": "Aceclofenac",
				"molecule_strength": "100 mg"
			}]
		}
	}, {
		"results": {
			"strength": "200",
			"strength_unit": "mg",
			"packaging": "10",
			"price": "46",
			"dose_taken": "",
			"dose_timing": "",
			"warnings": "",
			"prescription": "",
			"brands_id": [{
				"brand_name": "ABATE",
				"categories": "NSAID`s",
				"types": "",
				"company_id": [{
					"company_name": "Genesis",
					"brand_id": ["5a645772e1609631e8fdf55f", "5a645bdbe1609631e8fdf5b8"]
				}],
				"dosage_id": [{
					"dosage_form": "Tablet",
					"strength_id": ["5a645772e1609631e8fdf55c"]
				}],
				"primarily_used_for": [""]
			}],
			"potent_substance": [{
				"name": "Aceclofenac",
				"molecule_strength": "200 mg"
			}]
		}
	}, {
		"results": {
			"strength": "100",
			"strength_unit": "mg",
			"packaging": "10",
			"price": "35",
			"dose_taken": "",
			"dose_timing": "",
			"warnings": "",
			"prescription": "",
			"brands_id": [{
				"brand_name": "AC",
				"categories": "NSAID`s",
				"types": "",
				"company_id": [{
					"company_name": "MMC Health",
					"brand_id": ["5a6457d5e1609631e8fdf567"]
				}],
				"dosage_id": [{
					"dosage_form": "Tablet",
					"strength_id": ["5a6457d5e1609631e8fdf561"]
				}],
				"primarily_used_for": [""]
			}],
			"potent_substance": [{
				"name": "Aceclofenac",
				"molecule_strength": "100 mg"
			}]
		}
	}, {
		"results": {
			"strength": "200",
			"strength_unit": "mg",
			"packaging": "10",
			"price": "60",
			"dose_taken": "",
			"dose_timing": "",
			"warnings": "",
			"prescription": "",
			"brands_id": [{
				"brand_name": "ACCEPT",
				"categories": "NSAID`s",
				"types": "",
				"company_id": [{
					"company_name": "Vivid Labs",
					"brand_id": ["5a6458e3e1609631e8fdf582"]
				}],
				"dosage_id": [{
					"dosage_form": "Tablet",
					"strength_id": ["5a6458e3e1609631e8fdf57f"]
				}],
				"primarily_used_for": [""]
			}],
			"potent_substance": [{
				"name": "Aceclofenac",
				"molecule_strength": "200 mg"
			}]
		}
	}, {
		"results": {
			"strength": "100",
			"strength_unit": "mg",
			"packaging": "10",
			"price": "35.58",
			"dose_taken": "",
			"dose_timing": "",
			"warnings": "",
			"prescription": "",
			"brands_id": [{
				"brand_name": "ACEZ",
				"categories": "NSAID`s",
				"types": "",
				"company_id": [{
					"company_name": "Crest Pharma",
					"brand_id": ["5a64593de1609631e8fdf591"]
				}],
				"dosage_id": [{
					"dosage_form": "Tablet",
					"strength_id": ["5a64593de1609631e8fdf58e"]
				}],
				"primarily_used_for": [""]
			}],
			"potent_substance": [{
				"name": "Aceclofenac",
				"molecule_strength": "100 mg"
			}]
		}
	}]
}

 */

//combination
/*

search = Acetylcysteine
hit /formolecule
keys molecule , nskip ,page
page means you want  combination


{
	"message": "molecule combination",
	"data": [{
		"strength": "10",
		"strength_unit": "",
		"packaging": "1",
		"price": "140.00",
		"dose_taken": "",
		"dose_timing": "",
		"warnings": "",
		"prescription": "",
		"brands_id": [{
			"brand_name": "ACEDRIL FORTE",
			"categories": "Mucolytic Agent",
			"types": "",
			"company_id": [{
				"_id": "5a68a075c649871b28fc8694",
				"company_name": "Intra Labs",
				"__v": 0,
				"brand_id": ["5a68a075c649871b28fc8693"]
			}],
			"dosage_id": [{
				"_id": "5a68a075c649871b28fc8692",
				"dosage_form": "Tab",
				"__v": 0,
				"strength_id": [{
					"_id": "5a68a075c649871b28fc8691",
					"strength": "10",
					"strength_unit": "",
					"packaging": "1",
					"price": "140.00",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a68a075c649871b28fc8693"],
					"potent_substance": {
						"molecule_strength": ["600 mg", "100 mg"],
						"name": ["Acetylcysteine", "Acebrophylline"]
					}
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": {
			"molecule_strength": ["600 mg", "100 mg"],
			"name": ["Acetylcysteine", "Acebrophylline"]
		}
	}, {
		"strength": "10",
		"strength_unit": "mg",
		"packaging": "1",
		"price": "126.00",
		"dose_taken": "",
		"dose_timing": "",
		"warnings": "",
		"prescription": "",
		"brands_id": [{
			"brand_name": "BRIOVENT TAB",
			"categories": "Mucolytic Agent",
			"types": "",
			"company_id": [{
				"_id": "5a68a168c649871b28fc8698",
				"company_name": "Brio Bliss",
				"__v": 0,
				"brand_id": ["5a68a168c649871b28fc8697"]
			}],
			"dosage_id": [{
				"_id": "5a68a168c649871b28fc8696",
				"dosage_form": "Tab",
				"__v": 0,
				"strength_id": [{
					"_id": "5a68a168c649871b28fc8695",
					"strength": "10",
					"strength_unit": "mg",
					"packaging": "1",
					"price": "126.00",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a68a168c649871b28fc8697"],
					"potent_substance": {
						"molecule_strength": ["600 mg", "100 mg"],
						"name": ["Acetylcysteine", "Acebrophylline"]
					}
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": {
			"molecule_strength": ["600 mg", "100 mg"],
			"name": ["Acetylcysteine", "Acebrophylline"]
		}
	}, {
		"strength": "10",
		"strength_unit": "mg",
		"packaging": "1",
		"price": "115.00",
		"dose_taken": "",
		"dose_timing": "",
		"warnings": "",
		"prescription": "",
		"brands_id": [{
			"brand_name": "EFFENAC-AB",
			"categories": "Mucolytic Agent",
			"types": "",
			"company_id": [{
				"_id": "5a68a1e3c649871b28fc86a8",
				"company_name": "Macleods (TB Care)",
				"__v": 0,
				"brand_id": ["5a68a1e3c649871b28fc86a7"]
			}],
			"dosage_id": [{
				"_id": "5a68a1e3c649871b28fc86a6",
				"dosage_form": "Tab",
				"__v": 0,
				"strength_id": [{
					"_id": "5a68a1e3c649871b28fc86a5",
					"strength": "10",
					"strength_unit": "mg",
					"packaging": "1",
					"price": "115.00",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a68a1e3c649871b28fc86a7"],
					"potent_substance": {
						"molecule_strength": ["600 mg"],
						"name": ["Acetylcysteine"]
					}
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": {
			"molecule_strength": ["600 mg"],
			"name": ["Acetylcysteine"]
		}
	}, {
		"strength": "10",
		"strength_unit": "mg",
		"packaging": "1",
		"price": "55.00",
		"dose_taken": "",
		"dose_timing": "",
		"warnings": "",
		"prescription": "",
		"brands_id": [{
			"brand_name": "AMBIAC-N",
			"categories": "Mucolytic Agent",
			"types": "",
			"company_id": [{
				"_id": "5a68a253c649871b28fc86b4",
				"company_name": "Esma",
				"__v": 0,
				"brand_id": ["5a68a253c649871b28fc86b3"]
			}],
			"dosage_id": [{
				"_id": "5a68a253c649871b28fc86b2",
				"dosage_form": "Tab",
				"__v": 0,
				"strength_id": [{
					"_id": "5a68a251c649871b28fc86b1",
					"strength": "10",
					"strength_unit": "mg",
					"packaging": "1",
					"price": "55.00",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a68a253c649871b28fc86b3"],
					"potent_substance": {
						"molecule_strength": ["30 mg", "300 mg"],
						"name": ["Ambroxol", "Acetylcysteine"]
					}
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": {
			"molecule_strength": ["30 mg", "300 mg"],
			"name": ["Ambroxol", "Acetylcysteine"]
		}
	}, {
		"strength": "10",
		"strength_unit": "mg",
		"packaging": "1",
		"price": "50.00",
		"dose_taken": "",
		"dose_timing": "",
		"warnings": "",
		"prescription": "",
		"brands_id": [{
			"brand_name": "VENTIREX-A",
			"categories": "Mucolytic Agent",
			"types": "",
			"company_id": [{
				"_id": "5a68a2bdc649871b28fc86bd",
				"company_name": "Unimarck",
				"__v": 0,
				"brand_id": ["5a68a2bdc649871b28fc86bc"]
			}],
			"dosage_id": [{
				"_id": "5a68a2bdc649871b28fc86bb",
				"dosage_form": "Tab",
				"__v": 0,
				"strength_id": [{
					"_id": "5a68a2bdc649871b28fc86ba",
					"strength": "10",
					"strength_unit": "mg",
					"packaging": "1",
					"price": "50.00",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a68a2bdc649871b28fc86bc"],
					"potent_substance": {
						"molecule_strength": ["30 mg", "300 mg"],
						"name": ["Ambroxol", "Acetylcysteine"]
					}
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": {
			"molecule_strength": ["30 mg", "300 mg"],
			"name": ["Ambroxol", "Acetylcysteine"]
		}
	}, {
		"strength": "10",
		"strength_unit": "mg",
		"packaging": "1",
		"price": "52.48",
		"dose_taken": "",
		"dose_timing": "",
		"warnings": "",
		"prescription": "",
		"brands_id": [{
			"brand_name": "NACIVENT",
			"categories": "Mucolytic Agent",
			"types": "",
			"company_id": [{
				"_id": "5a68a314c649871b28fc86c5",
				"company_name": "Satven And Mer",
				"__v": 0,
				"brand_id": ["5a68a314c649871b28fc86c4"]
			}],
			"dosage_id": [{
				"_id": "5a68a314c649871b28fc86c3",
				"dosage_form": "Tab",
				"__v": 0,
				"strength_id": [{
					"_id": "5a68a314c649871b28fc86c2",
					"strength": "10",
					"strength_unit": "mg",
					"packaging": "1",
					"price": "52.48",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a68a314c649871b28fc86c4"],
					"potent_substance": {
						"molecule_strength": ["30 mg", "200 mg"],
						"name": ["Ambroxol", "Acetylcysteine"]
					}
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": {
			"molecule_strength": ["30 mg", "200 mg"],
			"name": ["Ambroxol", "Acetylcysteine"]
		}
	}, {
		"strength": "10",
		"strength_unit": "mg",
		"packaging": "1",
		"price": "114.91",
		"dose_taken": "",
		"dose_timing": "",
		"warnings": "",
		"prescription": "",
		"brands_id": [{
			"brand_name": "EB MAX",
			"categories": "Mucolytic Agent",
			"types": "",
			"company_id": [{
				"_id": "5a68a394c649871b28fc86d4",
				"company_name": "MMC",
				"__v": 0,
				"brand_id": ["5a68a394c649871b28fc86d3"]
			}],
			"dosage_id": [{
				"_id": "5a68a394c649871b28fc86d2",
				"dosage_form": "Tab",
				"__v": 0,
				"strength_id": [{
					"_id": "5a68a394c649871b28fc86d1",
					"strength": "10",
					"strength_unit": "mg",
					"packaging": "1",
					"price": "114.91",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a68a394c649871b28fc86d3"],
					"potent_substance": {
						"molecule_strength": ["10 mg", "10 mg"],
						"name": ["Acetylcysteine", "Acebrophylline"]
					}
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": {
			"molecule_strength": ["10 mg", "10 mg"],
			"name": ["Acetylcysteine", "Acebrophylline"]
		}
	}, {
		"strength": "10",
		"strength_unit": "mg",
		"packaging": "1",
		"price": "140.00",
		"dose_taken": "",
		"dose_timing": "",
		"warnings": "",
		"prescription": "",
		"brands_id": [{
			"brand_name": "ENCC",
			"categories": "Mucolytic Agent",
			"types": "",
			"company_id": [{
				"_id": "5a68a4b3c649871b28fc86e4",
				"company_name": "Shield",
				"__v": 0,
				"brand_id": ["5a68a4b3c649871b28fc86e3", "5a68a635c649871b28fc86f8"]
			}],
			"dosage_id": [{
				"_id": "5a68a4b3c649871b28fc86e2",
				"dosage_form": "Tab",
				"__v": 0,
				"strength_id": [{
					"_id": "5a68a4b3c649871b28fc86e1",
					"strength": "10",
					"strength_unit": "mg",
					"packaging": "1",
					"price": "140.00",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a68a4b3c649871b28fc86e3"],
					"potent_substance": {
						"molecule_strength": ["600 mg", "50 mg"],
						"name": ["Acetylcysteine", "Clomiphene"]
					}
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": {
			"molecule_strength": ["600 mg", "50 mg"],
			"name": ["Acetylcysteine", "Clomiphene"]
		}
	}, {
		"strength": "5",
		"strength_unit": "mg",
		"packaging": "1",
		"price": "90.00",
		"dose_taken": "",
		"dose_timing": "",
		"warnings": "",
		"prescription": "",
		"brands_id": [{
			"brand_name": "OVANAC CC",
			"categories": "Mucolytic Agent",
			"types": "",
			"company_id": [{
				"_id": "5a68a530c649871b28fc86e8",
				"company_name": "Nexgen Rx Lifescience",
				"__v": 0,
				"brand_id": ["5a68a530c649871b28fc86e7"]
			}],
			"dosage_id": [{
				"_id": "5a68a530c649871b28fc86e6",
				"dosage_form": "Tab",
				"__v": 0,
				"strength_id": [{
					"_id": "5a68a52ec649871b28fc86e5",
					"strength": "5",
					"strength_unit": "mg",
					"packaging": "1",
					"price": "90.00",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a68a530c649871b28fc86e7"],
					"potent_substance": {
						"molecule_strength": ["600 mg", "50 mg"],
						"name": ["Acetylcysteine", "Clomiphene"]
					}
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": {
			"molecule_strength": ["600 mg", "50 mg"],
			"name": ["Acetylcysteine", "Clomiphene"]
		}
	}, {
		"strength": "1",
		"strength_unit": "mg",
		"packaging": "1",
		"price": "499.00",
		"dose_taken": "",
		"dose_timing": "",
		"warnings": "",
		"prescription": "",
		"brands_id": [{
			"brand_name": "FEOFER OVA",
			"categories": "Mucolytic Agent",
			"types": "",
			"company_id": [{
				"_id": "5a68a5b5c649871b28fc86f5",
				"company_name": "Alna Bio",
				"__v": 0,
				"brand_id": ["5a68a5b5c649871b28fc86f4"]
			}],
			"dosage_id": [{
				"_id": "5a68a5b5c649871b28fc86f3",
				"dosage_form": "Tab",
				"__v": 0,
				"strength_id": [{
					"_id": "5a68a5b5c649871b28fc86f2",
					"strength": "1",
					"strength_unit": "mg",
					"packaging": "1",
					"price": "499.00",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a68a5b5c649871b28fc86f4"],
					"potent_substance": {
						"molecule_strength": ["50 mg", "600 mg", "4 mg"],
						"name": ["Clomiphene", "Acetylcysteine", "Astaxanthin"]
					}
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": {
			"molecule_strength": ["50 mg", "600 mg", "4 mg"],
			"name": ["Clomiphene", "Acetylcysteine", "Astaxanthin"]
		}
	}]
}
*/

//similarbrands
/*
hit to /similarbrands
molecule = Aceclofenac
strength = 100 mg
nskip = marzi bhai jo rakhle

{
	"message": "similarbrands",
	"data": [{
		"results": {
			"strength": "100",
			"strength_unit": "mg",
			"packaging": "10",
			"price": "30",
			"dose_taken": "",
			"dose_timing": "",
			"warnings": "",
			"prescription": "",
			"brands_id": [{
				"brand_name": "ZERODOL",
				"categories": "",
				"types": "",
				"company_id": [{
					"company_name": "Ipca",
					"brand_id": ["5a689f46c649871b28fc868c", "5a68a17ac649871b28fc869b"]
				}],
				"dosage_id": [{
					"dosage_form": "Tablet",
					"strength_id": ["5a689f44c649871b28fc868a", "5a68a180c649871b28fc869c"]
				}, {
					"dosage_form": "Injection",
					"strength_id": ["5a689fb9c649871b28fc868f"]
				}],
				"primarily_used_for": [""]
			}],
			"potent_substance": {
				"molecule_strength": ["100 mg"],
				"name": ["Aceclofenac"]
			}
		}
	}, {
		"results": {
			"strength": "100 mg",
			"strength_unit": "mg",
			"packaging": "10",
			"price": "17.90",
			"dose_taken": "",
			"dose_timing": "",
			"warnings": "",
			"prescription": "",
			"brands_id": [{
				"brand_name": "ZIX",
				"categories": "",
				"types": "",
				"company_id": [{
					"company_name": "Jenburkt",
					"brand_id": ["5a68a211c649871b28fc86ab"]
				}],
				"dosage_id": [{
					"dosage_form": "Tablet",
					"strength_id": ["5a68a211c649871b28fc86a9"]
				}],
				"primarily_used_for": [""]
			}],
			"potent_substance": {
				"molecule_strength": ["100 mg"],
				"name": ["Aceclofenac"]
			}
		}
	}, {
		"results": {
			"strength": "100 mg",
			"strength_unit": "mg",
			"packaging": "10",
			"price": "23",
			"dose_taken": "",
			"dose_timing": "",
			"warnings": "",
			"prescription": "",
			"brands_id": [{
				"brand_name": "ZOFEN",
				"categories": "",
				"types": "",
				"company_id": [{
					"company_name": "Zota Pharma",
					"brand_id": ["5a68a24bc649871b28fc86af"]
				}],
				"dosage_id": [{
					"dosage_form": "Tablet",
					"strength_id": ["5a68a24bc649871b28fc86ad"]
				}],
				"primarily_used_for": [""]
			}],
			"potent_substance": {
				"molecule_strength": ["100 mg"],
				"name": ["Aceclofenac"]
			}
		}
	}, {
		"results": {
			"strength": "100 mg",
			"strength_unit": "mg",
			"packaging": "10",
			"price": "46.40",
			"dose_taken": "",
			"dose_timing": "",
			"warnings": "",
			"prescription": "",
			"brands_id": [{
				"brand_name": "ACECLO PLUS",
				"categories": "",
				"types": "",
				"company_id": [{
					"company_name": "Aristo",
					"brand_id": ["5a68a2edc649871b28fc86c0", "5a68a38dc649871b28fc86d0"]
				}],
				"dosage_id": [{
					"dosage_form": "Tablet",
					"strength_id": ["5a68a2edc649871b28fc86be"]
				}],
				"primarily_used_for": [""]
			}],
			"potent_substance": {
				"molecule_strength": ["100 mg"],
				"name": ["Aceclofenac"]
			}
		}
	}]
}




 */

//readmore
/*
hit /readmore
brand:FLUIMUCIL

{
	"message": "read more",
	"data": [{
		"brand_name": "FLUIMUCIL",
		"categories": "mucolytic agent",
		"types": "",
		"company_id": [{
			"company_name": "Modi Mundi"
		}],
		"dosage_id": [{
			"dosage_form": "Powder",
			"strength_id": [{
				"strength": "100mg",
				"packaging": "3g",
				"price": "11.23",
				"dose_taken": "",
				"dose_timing": "",
				"warnings": "",
				"prescription": "",
				"potent_substance": {
					"molecule_strength": ["100mg"],
					"name": ["Acetylcycteine"]
				}
			}]
		}],
		"primarily_used_for": [""]
	}]
}

 */