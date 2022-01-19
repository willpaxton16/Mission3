using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3.Models
{
    //Model to grab user inputs for Grade Calculator and perform some validation
    public class CalculatorModel
    {
        [Required]
        [Range(0,100)]
        public decimal Assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public decimal GroupProjects { get; set; }
        [Required]
        [Range(0, 100)]
        public decimal Quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public decimal Exams { get; set; }
        [Required]
        [Range(0, 100)]
        public decimal INTEX { get; set; }

    }
}
