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
			"potent_substance": [{
				"name": "Aceclofenac",
				"molecule_strength": "1000 mg"
			}]
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
hit /formolecule
keys molecule , nskip ,page
page means you want  combination



{
	"message": "molecule combination",
	"data": [{
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
				"_id": "5a64513ee1609631e8fdf521",
				"company_name": "Aaltramed Healthcare",
				"__v": 0,
				"brand_id": ["5a64513ee1609631e8fdf520"]
			}],
			"dosage_id": [{
				"_id": "5a64513ee1609631e8fdf51f",
				"dosage_form": "Infusion",
				"__v": 0,
				"strength_id": [{
					"_id": "5a64513ee1609631e8fdf51d",
					"strength": "1000",
					"strength_unit": "mg",
					"packaging": "100 ml",
					"price": "257.13",
					"dose_taken": "Empty Food",
					"dose_timing": "BD",
					"warnings": "Not to be used in pregnancy",
					"prescription": "Needed",
					"__v": 0,
					"brands_id": ["5a64513ee1609631e8fdf520"],
					"potent_substance": [{
						"name": "Aceclofenac",
						"molecule_strength": "1000 mg",
						"_id": "5a64513ee1609631e8fdf51e"
					}]
				}]
			}],
			"primarily_used_for": ["Joint Pain"]
		}],
		"potent_substance": [{
			"name": "Aceclofenac",
			"molecule_strength": "1000 mg"
		}]
	}, {
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
				"_id": "5a6451f5e1609631e8fdf526",
				"company_name": "Ipca",
				"__v": 0,
				"brand_id": ["5a6451f5e1609631e8fdf525", "5a6456c7e1609631e8fdf552"]
			}],
			"dosage_id": [{
				"_id": "5a6451f5e1609631e8fdf524",
				"dosage_form": "Tablet",
				"__v": 0,
				"strength_id": [{
					"_id": "5a6451f5e1609631e8fdf522",
					"strength": "100",
					"strength_unit": "mg",
					"packaging": "10",
					"price": "30",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a6451f5e1609631e8fdf525"],
					"potent_substance": [{
						"name": "Aceclofenac",
						"molecule_strength": "100 mg",
						"_id": "5a6451f5e1609631e8fdf523"
					}]
				}]
			}, {
				"_id": "5a64523de1609631e8fdf52e",
				"dosage_form": "Injection",
				"__v": 0,
				"strength_id": [{
					"_id": "5a64523de1609631e8fdf52c",
					"strength_unit": "mg",
					"packaging": "1 ml",
					"price": "15",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a6451f5e1609631e8fdf525"],
					"potent_substance": [{
						"name": "Aceclofenac",
						"molecule_strength": "150 mg",
						"_id": "5a64523de1609631e8fdf52d"
					}]
				}, {
					"_id": "5a645666e1609631e8fdf54d",
					"strength_unit": "mg",
					"packaging": "1ml",
					"price": "4.76",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a64563fe1609631e8fdf54b"],
					"potent_substance": [{
						"name": "Pentazocine",
						"molecule_strength": "-",
						"_id": "5a645666e1609631e8fdf54e"
					}]
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": [{
			"name": "Aceclofenac",
			"molecule_strength": "100 mg"
		}]
	}, {
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
				"_id": "5a6451f5e1609631e8fdf526",
				"company_name": "Ipca",
				"__v": 0,
				"brand_id": ["5a6451f5e1609631e8fdf525", "5a6456c7e1609631e8fdf552"]
			}],
			"dosage_id": [{
				"_id": "5a6451f5e1609631e8fdf524",
				"dosage_form": "Tablet",
				"__v": 0,
				"strength_id": [{
					"_id": "5a6451f5e1609631e8fdf522",
					"strength": "100",
					"strength_unit": "mg",
					"packaging": "10",
					"price": "30",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a6451f5e1609631e8fdf525"],
					"potent_substance": [{
						"name": "Aceclofenac",
						"molecule_strength": "100 mg",
						"_id": "5a6451f5e1609631e8fdf523"
					}]
				}]
			}, {
				"_id": "5a64523de1609631e8fdf52e",
				"dosage_form": "Injection",
				"__v": 0,
				"strength_id": [{
					"_id": "5a64523de1609631e8fdf52c",
					"strength_unit": "mg",
					"packaging": "1 ml",
					"price": "15",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a6451f5e1609631e8fdf525"],
					"potent_substance": [{
						"name": "Aceclofenac",
						"molecule_strength": "150 mg",
						"_id": "5a64523de1609631e8fdf52d"
					}]
				}, {
					"_id": "5a645666e1609631e8fdf54d",
					"strength_unit": "mg",
					"packaging": "1ml",
					"price": "4.76",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a64563fe1609631e8fdf54b"],
					"potent_substance": [{
						"name": "Pentazocine",
						"molecule_strength": "-",
						"_id": "5a645666e1609631e8fdf54e"
					}]
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": [{
			"name": "Aceclofenac",
			"molecule_strength": "150 mg"
		}]
	}, {
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
				"_id": "5a6451f5e1609631e8fdf526",
				"company_name": "Ipca",
				"__v": 0,
				"brand_id": ["5a6451f5e1609631e8fdf525", "5a6456c7e1609631e8fdf552"]
			}],
			"dosage_id": [{
				"_id": "5a6456c7e1609631e8fdf551",
				"dosage_form": "Tablet",
				"__v": 0,
				"strength_id": [{
					"_id": "5a6456c7e1609631e8fdf54f",
					"strength_unit": "mg",
					"packaging": "10",
					"price": "50",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a6456c7e1609631e8fdf552"],
					"potent_substance": [{
						"name": "Aceclofenac",
						"molecule_strength": "200 mg",
						"_id": "5a6456c7e1609631e8fdf550"
					}]
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": [{
			"name": "Aceclofenac",
			"molecule_strength": "200 mg"
		}]
	}, {
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
				"_id": "5a645723e1609631e8fdf55b",
				"company_name": "Jenburkt",
				"__v": 0,
				"brand_id": ["5a645723e1609631e8fdf55a"]
			}],
			"dosage_id": [{
				"_id": "5a645723e1609631e8fdf559",
				"dosage_form": "Tablet",
				"__v": 0,
				"strength_id": [{
					"_id": "5a645723e1609631e8fdf557",
					"strength": "100",
					"strength_unit": "mg",
					"packaging": "10",
					"price": "17.90",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a645723e1609631e8fdf55a"],
					"potent_substance": [{
						"name": "Aceclofenac",
						"molecule_strength": "100 mg",
						"_id": "5a645723e1609631e8fdf558"
					}]
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": [{
			"name": "Aceclofenac",
			"molecule_strength": "100 mg"
		}]
	}, {
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
				"_id": "5a645772e1609631e8fdf560",
				"company_name": "Genesis",
				"__v": 0,
				"brand_id": ["5a645772e1609631e8fdf55f", "5a645bdbe1609631e8fdf5b8"]
			}],
			"dosage_id": [{
				"_id": "5a645772e1609631e8fdf55e",
				"dosage_form": "Tablet",
				"__v": 0,
				"strength_id": [{
					"_id": "5a645772e1609631e8fdf55c",
					"strength": "200",
					"strength_unit": "mg",
					"packaging": "10",
					"price": "46",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a645772e1609631e8fdf55f"],
					"potent_substance": [{
						"name": "Aceclofenac",
						"molecule_strength": "200 mg",
						"_id": "5a645772e1609631e8fdf55d"
					}]
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": [{
			"name": "Aceclofenac",
			"molecule_strength": "200 mg"
		}]
	}, {
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
				"_id": "5a6457d5e1609631e8fdf569",
				"company_name": "MMC Health",
				"__v": 0,
				"brand_id": ["5a6457d5e1609631e8fdf567"]
			}],
			"dosage_id": [{
				"_id": "5a6457d5e1609631e8fdf565",
				"dosage_form": "Tablet",
				"__v": 0,
				"strength_id": [{
					"_id": "5a6457d5e1609631e8fdf561",
					"strength": "100",
					"strength_unit": "mg",
					"packaging": "10",
					"price": "35",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a6457d5e1609631e8fdf567"],
					"potent_substance": [{
						"name": "Aceclofenac",
						"molecule_strength": "100 mg",
						"_id": "5a6457d5e1609631e8fdf562"
					}]
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": [{
			"name": "Aceclofenac",
			"molecule_strength": "100 mg"
		}]
	}, {
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
				"_id": "5a6458e3e1609631e8fdf583",
				"company_name": "Vivid Labs",
				"__v": 0,
				"brand_id": ["5a6458e3e1609631e8fdf582"]
			}],
			"dosage_id": [{
				"_id": "5a6458e3e1609631e8fdf581",
				"dosage_form": "Tablet",
				"__v": 0,
				"strength_id": [{
					"_id": "5a6458e3e1609631e8fdf57f",
					"strength": "200",
					"strength_unit": "mg",
					"packaging": "10",
					"price": "60",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a6458e3e1609631e8fdf582"],
					"potent_substance": [{
						"name": "Aceclofenac",
						"molecule_strength": "200 mg",
						"_id": "5a6458e3e1609631e8fdf580"
					}]
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": [{
			"name": "Aceclofenac",
			"molecule_strength": "200 mg"
		}]
	}, {
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
				"_id": "5a64593de1609631e8fdf592",
				"company_name": "Crest Pharma",
				"__v": 0,
				"brand_id": ["5a64593de1609631e8fdf591"]
			}],
			"dosage_id": [{
				"_id": "5a64593de1609631e8fdf590",
				"dosage_form": "Tablet",
				"__v": 0,
				"strength_id": [{
					"_id": "5a64593de1609631e8fdf58e",
					"strength": "100",
					"strength_unit": "mg",
					"packaging": "10",
					"price": "35.58",
					"dose_taken": "",
					"dose_timing": "",
					"warnings": "",
					"prescription": "",
					"__v": 0,
					"brands_id": ["5a64593de1609631e8fdf591"],
					"potent_substance": [{
						"name": "Aceclofenac",
						"molecule_strength": "100 mg",
						"_id": "5a64593de1609631e8fdf58f"
					}]
				}]
			}],
			"primarily_used_for": [""]
		}],
		"potent_substance": [{
			"name": "Aceclofenac",
			"molecule_strength": "100 mg"
		}]
	}]
}

*/