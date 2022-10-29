using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using MyScriptureJournal3.Models;

namespace MyScriptureJournal3.Pages_Journal
{
    public class CreateModel : PageModel
    {
        private readonly MyScriptureJournal3Context _context;

        public CreateModel(MyScriptureJournal3Context context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public ScriptNotes ScriptNotes { get; set; } = default!;
        

        // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD
        public async Task<IActionResult> OnPostAsync()
        {
          if (!ModelState.IsValid || _context.ScriptNotes == null || ScriptNotes == null)
            {
                return Page();
            }

            _context.ScriptNotes.Add(ScriptNotes);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
