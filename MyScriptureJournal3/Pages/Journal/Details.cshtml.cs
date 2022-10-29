using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using MyScriptureJournal3.Models;

namespace MyScriptureJournal3.Pages_Journal
{
    public class DetailsModel : PageModel
    {
        private readonly MyScriptureJournal3Context _context;

        public DetailsModel(MyScriptureJournal3Context context)
        {
            _context = context;
        }

      public ScriptNotes ScriptNotes { get; set; } = default!; 

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null || _context.ScriptNotes == null)
            {
                return NotFound();
            }

            var scriptnotes = await _context.ScriptNotes.FirstOrDefaultAsync(m => m.ID == id);
            if (scriptnotes == null)
            {
                return NotFound();
            }
            else 
            {
                ScriptNotes = scriptnotes;
            }
            return Page();
        }
    }
}
