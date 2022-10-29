using System.ComponentModel.DataAnnotations;

namespace MyScriptureJournal3.Models
{
    public class ScriptNotes
    {
        public int ID { get; set; }
        public string Canon { get; set; } = string.Empty;
        public string Book { get; set; } = string.Empty;
        public string Chapter { get; set; } = string.Empty;
        public string Verses { get; set; } = string.Empty;
        public string Notes { get; set; } = string.Empty;

        [DataType(DataType.Date)]
        public DateTime CreatedDate { get; set; }
    }
}