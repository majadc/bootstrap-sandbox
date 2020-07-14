let searchCssRuleset = {};
  (function(){

    let cssRuleset = [];

    this.cssRulesetSearch = function (...args) {
      for ( const arg of args ) {
        let rule = arg.split('}');
        cssRuleset =  cssRuleset.concat(rule);
      }
      cssRuleset = cssRuleset.filter(function( rule ){
        return rule !== "\n"
      });
      for ( let i = 0;  i < cssRuleset.length; i++ ) {
        cssRuleset[i] = `${cssRuleset[i]}}\n`;
      }
    }
    
    $("#formSearchStylerulesSubmit").click(function(e){
      searchRuleset();
      e.preventDefault();
      
    });

    function searchRuleset () {
      resetFormSearchStylerules();

      let formSearchStylerulesInput = $("#formSearchStylerulesInput").val();
      
      if ( validationFormSearchStylerulesRequired(formSearchStylerulesInput) ) {
        let bsRules = getCssRuleset(formSearchStylerulesInput);
        if  ( validationFormSearchStylerulesNoResult(bsRules) ) {
          $("#formSearchStylerulesOutputJs").html(colorCssRuleset(formSearchStylerulesInput));
        } 
      }
        
    }
  
    function getCssRuleset ( string ) {
      let result = [];
      for (let rulset of cssRuleset) {
        if ( rulset.indexOf( string ) > 0 ) {
          result.push(rulset);
        }
      }
      return result.join(' ');
    }

    
    function colorCssRuleset (string) {
      let arrayRulesSetResult = getCssRuleset( string ).split('\n');
      let i = 0;
      for ( let item of arrayRulesSetResult ) {
        //if ( ( item.indexOf(';') > 0 ) ) {
          if ( item.indexOf(string) > 0 ) {
            arrayRulesSetResult[i] = `<span class="mdc-stylerules-property">${item}</span>`;
          }
        //}
         i++;
      }
      return arrayRulesSetResult.join('\n');
    }

    function resetFormSearchStylerules () {
    
     $("#formSearchStylerulesInput").removeClass("invalid");
      $("#formSearchStylerulesOutputJs").html('');
      $("#formSearchStylerulesInfo").html('').removeClass("show").attr("aria-hidden", "true");
    }

    function validationFormSearchStylerulesRequired ( string ) {
      if ( string === '' ) {
        $("#formSearchStylerulesInput").addClass("invalid");
        $("#formSearchStylerulesInfo").html("Fill the field.").addClass("show").attr("aria-hidden", "false");
        return false;
      } else return true;
    }
    function validationFormSearchStylerulesNoResult ( result) {
      if ( result === '' ) {
        $("#formSearchStylerulesInfo").html("Nothing to find.").addClass("show").attr("aria-hidden", "false");
        return false;
      } else return true;
    }

  }).apply(searchCssRuleset);
