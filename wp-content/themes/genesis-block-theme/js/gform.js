jQuery(document).ready(function ($) {
  let result =
    "Congrats on making the decision to start swim lessons for your baby! We recommend starting swim lessons when your baby is 2+ months old. Please fill out our registration form and we will contact you when your baby is 2 months old. To learn more about our Bathtime Babies class for children ages 2-5 months old, please click here";
  var level;
  var optionIndex;
  console.log("result", result);

  $("#input_1_1").on("change", function () {
    let selectedOption = $(this).find("option:selected");
    optionIndex = selectedOption.index();
    console.log("#input_1_1", optionIndex);

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
        $(".input-experience").show();
        level = 1;
        console.log("level", level);
        handleExperience();
        break;
      case 4:
        console.log("level 3");
        $(".input-experience").show();
        level = 3;
        console.log("level", level);

        // $("#input_1_3").on("change", function () {
        //   let optionIndex2 = $(this).find("option:selected").index();
        //   console.log("input-experience", optionIndex2);

        //   if (optionIndex2 === 1) {
        //     $(".input-far").show();
        //     console.log("level", level);

        //     $("#input_1_4").on("change", function () {
        //       let optionIndex3 = $(this).find("option:selected").index();
        //       console.log("#input_1_4", optionIndex3);

        //       if (optionIndex3 === 1 || optionIndex3 === 2) {
        //         $(".input-breath").show();
        //         console.log("level", level);

        //         $("#input_1_5").on("change", function () {
        //           let optionIndex4 = $(this).find("option:selected").index();
        //           console.log("#input_1_5", optionIndex4);
        //           console.log("level:", level);

        //           if (optionIndex4 == 0) {
        //             level = 3;
        //             console.log("level:", level);
        //           }
        //           if (optionIndex4 == 1 || optionIndex4 == 2) {
        //             level = 4;
        //             console.log("level:", level);
        //           }
        //         });
        //       } else {
        //         $(".input-breath").hide();
        //       }
        //     });
        //   } else {
        //     $(".input-far, .input-breath").hide();
        //   }
        // });
        handleExperience();
        break;
      case 5:
        console.log("level 6");
        $(".input-experience").show();
        level = 6;
        console.log("level", level);
        handleExperience();

        break;
      case 6:
        console.log("level 6-6");
        $(".input-experience").show();
        level = 6;
        console.log("level", level);

        handleExperience();
        break;
    }
  });

  // Does your child have swim experience?
  function handleExperience() {
    $("#input_1_3").on("change", function () {
      let optionIndex2 = $(this).find("option:selected").index();
      console.log("input-experience", optionIndex2);

      if (optionIndex2 == 1) {
        $(".input-far").show();
        console.log("level", level);

        handleDistance();
      } else {
        $(
          ".input-far, .input-breath , .input-back, .input-freestyle, .input-backstroke, .input-butterfly, .input-breaststroke"
        ).hide();
      }
    });
  }
  // How far can your child swim?
  function handleDistance() {
    $("#input_1_4").on("change", function () {
      let optionIndex3 = $(this).find("option:selected").index();
      let optionIndex4 = $("#input_1_5").find("option:selected").index();
      let optionIndex5 = $("#input_1_7").find("option:selected").index();
      console.log("#input_1_4", optionIndex3);

      if (optionIndex3 == 1 || optionIndex3 == 2) {
        if (optionIndex == 4) {
          level = 3;
          console.log("level", level);
        }
        if (optionIndex == 5 || optionIndex == 6) {
          level = 6;
          console.log("level", level);
        }
        $(".input-breath").show();

        handleBreath(optionIndex3);
        console.log("level", level);
      } else {
        $(
          ".input-breath, .input-back, .input-freestyle, .input-backstroke, .input-butterfly, .input-breaststroke"
        ).hide();
      }
      if (optionIndex3 == 2 && optionIndex4 == 2) {
        if (optionIndex == 4) {
          level = 3;
          console.log("level:", level);
          $(".input-back").show();

          handleBackFloat();
          if (optionIndex5 == 1) {
            level = 4;
            console.log("level:", level);
          }
          if (optionIndex5 == 2) {
            level = 5;
            console.log("level:", level);
          }
        } else {
          if (optionIndex == 3) {
            level = 2;
            console.log("level:", level);
          } else {
            level = 6;
            console.log("level:", level);
            $(".input-back").show();

            handleBackFloat();
          }
        }
      } else {
        $(
          ".input-back, .input-freestyle, .input-backstroke, .input-butterfly, .input-breaststroke"
        ).hide();
      }
      // if (optionIndex3 == 2 && optionIndex4 == 2) {
      //   level = 6;
      //   console.log("level:", level);
      //   $(".input-back").show();

      //   handleBackFloat();
      // } else {
      //   $(
      //     ".input-back, .input-freestyle, .input-backstroke, .input-butterfly, .input-breaststroke"
      //   ).hide();
      // }
    });
  }
  // How long can your child hold their breath?
  function handleBreath(optionIndex3) {
    $("#input_1_5").on("change", function () {
      let optionIndex4 = $(this).find("option:selected").index();
      let optionIndex1 = $("input_1_1").find("option:selected").index();
      console.log("#input_1_5", optionIndex4);
      console.log("level:", level);
      $(".input-back").hide();

      if (optionIndex4 == 0) {
        if (optionIndex == 4) {
          level = 3;
          console.log("level:", level);
        } else {
          if (optionIndex == 3) {
            level = 1;
            console.log("level:", level);
          } else {
            level = 6;
            console.log("level:", level);
          }
        }
      }

      if (optionIndex4 == 1 || optionIndex4 == 2) {
        if (optionIndex == 4) {
          level = 3;
          console.log("level:", level);
        } else {
          if (optionIndex == 3) {
            if (optionIndex4 == 2) {
              level = 2;
              console.log("level:", level);
            } else {
              level = 1;
              console.log("level:", level);
            }
          } else {
            level = 6;
            console.log("level:", level);
          }
        }
      }

      if (optionIndex3 == 2 && optionIndex4 == 2) {
        if (optionIndex == 4) {
          level = 3;
          console.log("level:", level);
          $(".input-back").show();

          handleBackFloat();
        } else {
          if (optionIndex == 3) {
            level = 2;
            console.log("level:", level);
          } else {
            level = 6;
            console.log("level:", level);
            $(".input-back").show();

            handleBackFloat();
          }
        }
      } else {
        if (optionIndex4 == 2 && optionIndex != 3) {
          if (optionIndex == 4) {
            level = 3;
            console.log("level:", level);
          }
          console.log("level:", level);
          $(".input-back").show();

          handleBackFloat();
        } else {
          $(
            ".input-back, .input-freestyle, .input-backstroke, .input-butterfly, .input-breaststroke"
          ).hide();
        }
      }
    });
  }
  // Can your child float on their back?
  function handleBackFloat() {
    $("#input_1_7").on("change", function () {
      $(".input-freestyle").hide();
      let optionIndex5 = $(this).find("option:selected").index();
      let optionIndex3 = $("#input_1_4").find("option:selected").index();

      if (optionIndex5 == 0) {
        if (optionIndex == 4) {
          level = 3;
          console.log("level:", level);
        } else {
          level = 6;
          console.log("level:", level);
        }
      }

      if (optionIndex5 == 1) {
        if (optionIndex == 4) {
          level = 4;
          console.log("level:", level);
        } else {
          level = 7;
          console.log("level:", level);
        }
      }

      if (optionIndex5 == 2) {
        if (optionIndex == 4) {
          level = 4;
          console.log("level:", level);
          if (optionIndex3 == 2) {
            level = 5;
            console.log("level:", level);
          }
        } else {
          level = 7;
          console.log("level:", level);

          $(".input-freestyle").show();

          handleFreestyle();
        }
      } else {
        $(
          " .input-freestyle, .input-backstroke, .input-butterfly, .input-breaststroke"
        ).hide();
      }
    });
  }
  // Can your child swim freestyle?
  function handleFreestyle() {
    $("#input_1_8").on("change", function () {
      $(".backstroke").hide();
      let optionIndex6 = $(this).find("option:selected").index();

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
        if (optionIndex == 6) {
          $(".input-backstroke").show();

          handleBackstroke();
        }
      } else {
        $(".input-backstroke, .input-butterfly, .input-breaststroke").hide();
      }
    });
  }
  // Can your child swim backstroke?
  function handleBackstroke() {
    $("#input_1_9").on("change", function () {
      let optionIndex7 = $(this).find("option:selected").index();
      if (optionIndex7 == 0 || optionIndex7 == 1) {
        level = 9;
        console.log("level:", level);
      }
      if (optionIndex7 == 2) {
        level = 10;
        console.log("level:", level);

        $(".input-butterfly").show();

        handleButterfly();
      } else {
        $(".input-butterfly, .input-breaststroke").hide();
      }
    });
  }
  // Can your child swim butterfly style?
  function handleButterfly() {
    $("#input_1_10").on("change", function () {
      let optionIndex8 = $(this).find("option:selected").index();
      if (optionIndex8 == 0 || optionIndex8 == 1) {
        level = 10;
        console.log("level:", level);
      }
      if (optionIndex8 == 2) {
        level = 11;
        console.log("level:", level);
        $(".input-breaststroke").show();
        //11
        handleBreaststroke();
      } else {
        $(".input-breaststroke").hide();
      }
    });
  }
  // Can your child swim breaststroke?
  function handleBreaststroke() {
    $("#input_1_11").on("change", function () {
      let optionIndex9 = $(this).find("option:selected").index();
      if (optionIndex9 == 0 || optionIndex9 == 1) {
        level = 11;
        console.log("level:", level);
      }
      if (optionIndex9 == 2) {
        console.log("level:", "STEALTH Swim Team");
      }
    });
  }
});
