using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment_2___Jackson_vdw.Models
{
    public class GradeCalculatorModel
    {
        [Range(0,100)]
        public string assignments { get; set; }
        [Range(0, 100)]
        public string group_projects { get; set; }
        [Range(0, 100)]
        public string quizzes { get; set; }
        [Range(0, 100)]
        public string exams { get; set; }
        [Range(0, 100)]
        public string intex { get; set; }
    }
}
