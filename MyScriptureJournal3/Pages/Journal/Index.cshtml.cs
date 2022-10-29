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
    public class IndexModel : PageModel
    {
        private readonly MyScriptureJournal3Context _context;

        public IndexModel(MyScriptureJournal3Context context)
        {
            _context = context;
        }

        public IList<ScriptNotes> ScriptNotes { get;set; } = default!;

        public async Task OnGetAsync()
        {
            if (_context.ScriptNotes != null)
            {
                ScriptNotes = await _context.ScriptNotes.ToListAsync();
            }
        }
    }
}
