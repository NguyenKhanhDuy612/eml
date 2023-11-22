jQuery(document).ready(function ($) {
  //   console.log("test gform");
  //   $("#input_1_1").on("change", function () {
  //     let selectedValue = $(this).val();
  //     selectedValue = selectedValue.replace(/\s+/g, "").toLowerCase();
  //     console.log(selectedValue);
  //   });

  //   getInputOption(input_1_1);
  let result =
    "Congrats on making the decision to start swim lessons for your baby! We recommend starting swim lessons when your baby is 2+ months old. Please fill out our registration form and we will contact you when your baby is 2 months old. To learn more about our Bathtime Babies class for children ages 2-5 months old, please click here";
  let level;
  console.log("result", result);

  //   if (optionIndex == 0) {
  //     console.log(
  //       "Congrats on making the decision to start swim lessons for your baby! We recommend starting swim lessons when your baby is 2+ months old. Please fill out our registration form and we will contact you when your baby is 2 months old. To learn more about our Bathtime Babies class for children ages 2-5 months old, please click here"
  //     );
  //   } else {
  //     if (optionIndex == 1) {
  //       console.log("Congrats! Your child is ready for Bathtime Babies ");
  //     } else {
  //       if (optionIndex == 2) {
  //         console.log("Congrats! Your child is ready for Level 1 ");
  //       } else {
  //         if (condition) {
  //           level = 1;
  //           console.log("level: ", level);
  //         }
  //       }
  //     }
  //   }

  //   $("#input_1_1").on("change", function () {
  //     let selectedOption = $(this).find("option:selected");

  //     let optionIndex = selectedOption.index();

  //     console.log("#input_1_1", optionIndex);

  //     if (optionIndex == 0) {
  //       result =
  //         "Congrats on making the decision to start swim lessons for your baby! We recommend starting swim lessons when your baby is 2+ months old. Please fill out our registration form and we will contact you when your baby is 2 months old. To learn more about our Bathtime Babies class for children ages 2-5 months old, please click here";
  //       console.log(result);
  //     }
  //     if (optionIndex == 1) {
  //       result =
  //         "Congrats! Your child is ready for Bathtime Babies {display details}";
  //       console.log(result);
  //     }
  //     if (optionIndex == 2) {
  //       result = "Congrats! Your child is ready for Level 1 {display details}";
  //       console.log(result);
  //     }
  //     if (optionIndex == 3) {
  //       $(".input-experience").show();
  //       level = 1;
  //       console.log("level", level);

  //       $(".input-experience #input_1_3").on("change", function () {
  //         let selectedOption = $(this).find("option:selected");

  //         let optionIndex2 = selectedOption.index();
  //         console.log("input-experience", optionIndex2);

  //         if (optionIndex2 == 1) {
  //           $(".input-far").show();

  //           $(".input-far #input_1_4").on("change", function () {
  //             let selectedOption = $(this).find("option:selected");

  //             let optionIndex3 = selectedOption.index();
  //             console.log("#input_1_4", optionIndex3);

  //             level = 1;
  //             console.log("level", level);

  //             if (optionIndex3 == 1 || optionIndex3 == 2) {
  //               $(".input-breath").show();

  //               $(".input-breath #input_1_5").on("change", function () {
  //                 let selectedOption = $(this).find("option:selected");

  //                 let optionIndex4 = selectedOption.index();
  //                 console.log("#input_1_5", optionIndex4);

  //                 if (optionIndex4 == 2) {
  //                   level = 2;
  //                   console.log("level: 2");
  //                 } else {
  //                   level = 1;
  //                   console.log("level: 1");
  //                 }
  //               });
  //             } else {
  //               $(".input-breath").hide();
  //             }
  //           });
  //         } else {
  //           $(".input-far").hide();
  //           $(".input-breath").hide();
  //         }
  //       });
  //     } else {
  //       $(".input-experience").hide();
  //       $(".input-far").hide();
  //       $(".input-breath").hide();
  //     }
  //   });

  $("#input_1_1").on("change", function () {
    let selectedOption = $(this).find("option:selected");
    let optionIndex = selectedOption.index();
    console.log("#input_1_1", optionIndex);

    let result;
    let level;

    switch (optionIndex) {
      case 0:
        result =
          "Congrats on making the decision to start swim lessons for your baby! We recommend starting swim lessons when your baby is 2+ months old. Please fill out our registration form and we will contact you when your baby is 2 months old. To learn more about our Bathtime Babies class for children ages 2-5 months old, please click here";
        console.log(result);
        $(".input-experience, .input-far, .input-breath").hide();
        break;
      case 1:
        result =
          "Congrats! Your child is ready for Bathtime Babies {display details}";
        console.log(result);
        $(".input-experience, .input-far, .input-breath").hide();
        break;
      case 2:
        result = "Congrats! Your child is ready for Level 1 {display details}";
        console.log(result);
        $(".input-experience, .input-far, .input-breath").hide();
        break;
      case 3:
        // $(".input-experience").show();
        // level = 1;
        // console.log("level", level);

        // $("#input_1_3").on("change", function () {
        //   let optionIndex2 = $(this).find("option:selected").index();
        //   console.log("input-experience", optionIndex2);

        //   if (optionIndex2 === 1) {
        //     $(".input-far").show();

        //     $("#input_1_4").on("change", function () {
        //       let optionIndex3 = $(this).find("option:selected").index();
        //       console.log("#input_1_4", optionIndex3);

        //       level = optionIndex3 === 1 || optionIndex3 === 2 ? 1 : level;

        //       if (optionIndex3 === 1 || optionIndex3 === 2) {
        //         $(".input-breath").show();
        //         console.log("level", level);

        //         $("#input_1_5").on("change", function () {
        //           let optionIndex4 = $(this).find("option:selected").index();
        //           console.log("#input_1_5", optionIndex4);
        //           level = optionIndex4 === 2 ? 2 : 1;
        //           console.log("level:", level);
        //         });
        //       } else {
        //         $(".input-breath").hide();
        //       }
        //     });
        //   } else {
        //     $(".input-far, .input-breath").hide();
        //   }
        // });
        handleInputExperience("#input_1_3");
        break;
      case 4:
        console.log("level 3");
        $(".input-experience").show();
        level = 3;
        console.log("level", level);

        $("#input_1_3").on("change", function () {
          let optionIndex2 = $(this).find("option:selected").index();
          console.log("input-experience", optionIndex2);

          if (optionIndex2 === 1) {
            $(".input-far").show();
            console.log("level", level);

            $("#input_1_4").on("change", function () {
              let optionIndex3 = $(this).find("option:selected").index();
              console.log("#input_1_4", optionIndex3);

              if (optionIndex3 === 1 || optionIndex3 === 2) {
                $(".input-breath").show();
                console.log("level", level);

                $("#input_1_5").on("change", function () {
                  let optionIndex4 = $(this).find("option:selected").index();
                  console.log("#input_1_5", optionIndex4);
                  console.log("level:", level);

                  if (optionIndex4 == 0) {
                    level = 3;
                    console.log("level:", level);
                  }
                  if (optionIndex4 == 1 || optionIndex4 == 2) {
                    level = 4;
                    console.log("level:", level);
                  }
                });
              } else {
                $(".input-breath").hide();
              }
            });
          } else {
            $(".input-far, .input-breath").hide();
          }
        });
        break;
      case 5:
        console.log("level 6");
        $(".input-experience").show();
        level = 6;
        console.log("level", level);

        $("#input_1_3").on("change", function () {
          let optionIndex2 = $(this).find("option:selected").index();
          console.log("input-experience", optionIndex2);

          if (optionIndex2 === 1) {
            $(".input-far").show();
            console.log("level", level);

            $("#input_1_4").on("change", function () {
              let optionIndex3 = $(this).find("option:selected").index();
              console.log("#input_1_4", optionIndex3);

              if (optionIndex3 === 1 || optionIndex3 === 2) {
                $(".input-breath").show();
                console.log("level", level);

                $("#input_1_5").on("change", function () {
                  let optionIndex4 = $(this).find("option:selected").index();
                  console.log("#input_1_5", optionIndex4);
                  console.log("level:", level);
                  $(".input-back").hide();

                  if (optionIndex4 == 0) {
                    level = 6;
                    console.log("level:", level);
                  }
                  if (optionIndex4 == 1 || optionIndex4 == 2) {
                    level = 6;
                    console.log("level:", level);
                  }
                  if (optionIndex3 == 2 && optionIndex4 == 2) {
                    level = 6;
                    console.log("level:", level);
                    $(".input-back").show();

                    // $("#input_1_7").on("change", function () {
                    //   $(".input-freestyle").hide();
                    //   let optionIndex5 = $(this)
                    //     .find("option:selected")
                    //     .index();
                    //   if (optionIndex5 == 0) {
                    //     level = 6;
                    //     console.log("level:", level);
                    //   }
                    //   if (optionIndex5 == 1) {
                    //     level = 7;
                    //     console.log("level:", level);
                    //   }
                    //   if (optionIndex5 == 2) {
                    //     level = 7;
                    //     console.log("level:", level);

                    //     $(".input-freestyle").show();

                    //     $("#input_1_8").on("change", function () {
                    //       let optionIndex6 = $(this)
                    //         .find("option:selected")
                    //         .index();

                    //       if (optionIndex6 == 0 || optionIndex6 == 1) {
                    //         level = 7;
                    //         console.log("level:", level);
                    //       }
                    //       if (optionIndex6 == 2) {
                    //         level = 8;
                    //         console.log("level:", level);
                    //       }
                    //       if (optionIndex6 == 3) {
                    //         level = 9;
                    //         console.log("level:", level);
                    //       }
                    //     });
                    //   } else {
                    //     $(" .input-freestyle").hide();
                    //   }
                    // });
                  } else {
                    $(".input-back, .input-freestyle").hide();
                  }
                });
              } else {
                $(".input-breath, .input-back, .input-freestyle").hide();
              }
            });
          } else {
            $(
              ".input-far, .input-breath , .input-back, .input-freestyle"
            ).hide();
          }
        });
        break;
      case 6:
        console.log("level 6-6");
        $(".input-experience").show();
        level = 6;
        console.log("level", level);

        $("#input_1_3").on("change", function () {
          let optionIndex2 = $(this).find("option:selected").index();
          console.log("input-experience", optionIndex2);

          if (optionIndex2 === 1) {
            $(".input-far").show();
            console.log("level", level);

            $("#input_1_4").on("change", function () {
              let optionIndex3 = $(this).find("option:selected").index();
              console.log("#input_1_4", optionIndex3);

              if (optionIndex3 === 1 || optionIndex3 === 2) {
                $(".input-breath").show();
                console.log("level", level);

                $("#input_1_5").on("change", function () {
                  let optionIndex4 = $(this).find("option:selected").index();
                  console.log("#input_1_5", optionIndex4);
                  console.log("level:", level);
                  $(".input-back").hide();

                  if (optionIndex4 == 0) {
                    level = 6;
                    console.log("level:", level);
                  }
                  if (optionIndex4 == 1 || optionIndex4 == 2) {
                    level = 6;
                    console.log("level:", level);
                  }
                  if (optionIndex3 == 2 && optionIndex4 == 2) {
                    level = 6;
                    console.log("level:", level);
                    $(".input-back").show();

                    $("#input_1_7").on("change", function () {
                      $(".input-freestyle").hide();
                      let optionIndex5 = $(this)
                        .find("option:selected")
                        .index();
                      if (optionIndex5 == 0) {
                        level = 6;
                        console.log("level:", level);
                      }
                      if (optionIndex5 == 1) {
                        level = 7;
                        console.log("level:", level);
                      }
                      if (optionIndex5 == 2) {
                        level = 7;
                        console.log("level:", level);

                        $(".input-freestyle").show();

                        $("#input_1_8").on("change", function () {
                          $(".backstroke").hide();
                          let optionIndex6 = $(this)
                            .find("option:selected")
                            .index();

                          if (optionIndex6 == 0 || optionIndex6 == 1) {
                            level = 7;
                            console.log("level:", level);
                          }
                          if (optionIndex6 == 2) {
                            level = 8;
                            console.log("level:", level);
                          }

                          if (optionIndex6 == 3) {
                            level = 9;
                            console.log("level:", level);

                            $(".input-backstroke").show();

                            $("#input_1_9").on("change", function () {
                              let optionIndex7 = $(this)
                                .find("option:selected")
                                .index();
                              if (optionIndex7 == 0 || optionIndex7 == 1) {
                                level = 9;
                                console.log("level:", level);
                              }
                              if (optionIndex7 == 2) {
                                level = 10;
                                console.log("level:", level);

                                $(".input-butterfly").show();

                                $("#input_1_10").on("change", function () {
                                  let optionIndex8 = $(this)
                                    .find("option:selected")
                                    .index();
                                  if (optionIndex8 == 0 || optionIndex8 == 1) {
                                    level = 10;
                                    console.log("level:", level);
                                  }
                                  if (optionIndex8 == 2) {
                                    level = 11;
                                    console.log("level:", level);
                                    $(".input-breaststroke").show();
                                    $("#input_1_11").on("change", function () {
                                      let optionIndex9 = $(this)
                                        .find("option:selected")
                                        .index();
                                      if (
                                        optionIndex9 == 0 ||
                                        optionIndex9 == 1
                                      ) {
                                        level = 11;
                                        console.log("level:", level);
                                      }
                                      if (optionIndex9 == 2) {
                                        console.log(
                                          "level:",
                                          "STEALTH Swim Team"
                                        );
                                      }
                                    });
                                  } else {
                                    $(".input-breaststroke").hide();
                                  }
                                });
                              } else {
                                $(
                                  ".input-butterfly, .input-breaststroke"
                                ).hide();
                              }
                            });
                          } else {
                            $(
                              ".input-backstroke, .input-butterfly, .input-breaststroke"
                            ).hide();
                          }
                        });
                      } else {
                        $(
                          " .input-freestyle, .input-backstroke, .input-butterfly, .input-breaststroke"
                        ).hide();
                      }
                    });
                  } else {
                    $(
                      ".input-back, .input-freestyle, .input-backstroke, .input-butterfly, .input-breaststroke"
                    ).hide();
                  }
                });
              } else {
                $(
                  ".input-breath, .input-back, .input-freestyle, .input-backstroke, .input-butterfly, .input-breaststroke"
                ).hide();
              }
            });
          } else {
            $(
              ".input-far, .input-breath , .input-back, .input-freestyle, .input-backstroke, .input-butterfly, .input-breaststroke"
            ).hide();
          }
        });
        break;

      default:
        $(".input-experience, .input-far, .input-breath").hide();
    }
  });

  //   #input_1_3
  function handleInputExperience(idInput3) {
    $(".input-experience").show();
    level = 1;
    console.log("level", level);

    $(idInput3).on("change", function () {
      let optionIndex2 = $(this).find("option:selected").index();
      console.log("input-experience", optionIndex2);

      if (optionIndex2 === 1) {
        $(".input-far").show();

        handleInputBreath("#input_1_4");
      } else {
        $(".input-far, .input-breath").hide();
      }
    });
  }

  // #input_1_4
  function handleInputBreath(idInput4) {
    $(idInput4).on("change", function () {
      let optionIndex3 = $(this).find("option:selected").index();
      console.log("#input_1_4", optionIndex3);

      level = optionIndex3 === 1 || optionIndex3 === 2 ? 1 : level;

      if (optionIndex3 === 1 || optionIndex3 === 2) {
        $(".input-breath").show();
        console.log("level", level);

        handleInputBlacfloat("#input_1_5");
      } else {
        $(".input-breath").hide();
      }
    });
  }

  function handleInputBlacfloat(idInput5) {
    $(idInput5).on("change", function () {
      let optionIndex4 = $(this).find("option:selected").index();
      console.log("#input_1_5", optionIndex4);
      level = optionIndex4 === 2 ? 2 : 1;
      console.log("level:", level);
    });
  }

  function handleInputFreestyle(idInput6) {}

  //   if (optionIndex4 == 2) {
  //     $(".input-back").show();
  //   } else {
  //     $(".input-back").hide();
  //   }

  //   function getInputOption(idInput){
  //     $("#idInput").on("change", function () {
  //       let selectedOption = $(this).find("option:selected");

  //       let optionIndex = selectedOption.index();
  //       console.log(idInput,"--",optionIndex);
  //     });
  //   }
});

//   if (optionIndex == 0) {
//     console.log(
//       "Congrats on making the decision to start swim lessons for your baby! We recommend starting swim lessons when your baby is 2+ months old. Please fill out our registration form and we will contact you when your baby is 2 months old. To learn more about our Bathtime Babies class for children ages 2-5 months old, please click here"
//     );
//   } else {
//     if (optionIndex == 1) {
//       console.log("Congrats! Your child is ready for Bathtime Babies ");
//     } else {
//       if (optionIndex == 2) {
//         console.log("Congrats! Your child is ready for Level 1 ");
//       } else {
//         if (condition) {
//           level = 1;
//           console.log("level: ", level);
//         }
//       }
//     }
//   }

//   $("#input_1_1").on("change", function () {
//     let selectedOption = $(this).find("option:selected");

//     let optionIndex = selectedOption.index();

//     console.log("#input_1_1", optionIndex);

//     if (optionIndex == 0) {
//       result =
//         "Congrats on making the decision to start swim lessons for your baby! We recommend starting swim lessons when your baby is 2+ months old. Please fill out our registration form and we will contact you when your baby is 2 months old. To learn more about our Bathtime Babies class for children ages 2-5 months old, please click here";
//       console.log(result);
//     }
//     if (optionIndex == 1) {
//       result =
//         "Congrats! Your child is ready for Bathtime Babies {display details}";
//       console.log(result);
//     }
//     if (optionIndex == 2) {
//       result = "Congrats! Your child is ready for Level 1 {display details}";
//       console.log(result);
//     }
//     if (optionIndex == 3) {
//       $(".input-experience").show();
//       level = 1;
//       console.log("level", level);

//       $(".input-experience #input_1_3").on("change", function () {
//         let selectedOption = $(this).find("option:selected");

//         let optionIndex2 = selectedOption.index();
//         console.log("input-experience", optionIndex2);

//         if (optionIndex2 == 1) {
//           $(".input-far").show();

//           $(".input-far #input_1_4").on("change", function () {
//             let selectedOption = $(this).find("option:selected");

//             let optionIndex3 = selectedOption.index();
//             console.log("#input_1_4", optionIndex3);

//             level = 1;
//             console.log("level", level);

//             if (optionIndex3 == 1 || optionIndex3 == 2) {
//               $(".input-breath").show();

//               $(".input-breath #input_1_5").on("change", function () {
//                 let selectedOption = $(this).find("option:selected");

//                 let optionIndex4 = selectedOption.index();
//                 console.log("#input_1_5", optionIndex4);

//                 if (optionIndex4 == 2) {
//                   level = 2;
//                   console.log("level: 2");
//                 } else {
//                   level = 1;
//                   console.log("level: 1");
//                 }
//               });
//             } else {
//               $(".input-breath").hide();
//             }
//           });
//         } else {
//           $(".input-far").hide();
//           $(".input-breath").hide();
//         }
//       });
//     } else {
//       $(".input-experience").hide();
//       $(".input-far").hide();
//       $(".input-breath").hide();
//     }
//   });
